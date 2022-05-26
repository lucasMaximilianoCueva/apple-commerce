import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();

  if (products) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

//---------------------------------------

export const addProduct = async (req, res) => {
  const { name, price, img } = req.body;

  const estaEnProducts = await Product.findOne({ name });  

  const noEstaVacio = name !== "" && img !== "" && price !== "";

  if (!estaEnProducts && noEstaVacio) {
    const newProduct = { name, price, img };
    await Product.create(newProduct);

    res.status(200).json({
      mensaje: "El producto ya esta en el carrito",
      newProduct
    });
  } else {
    res.status(400).json({
      mensaje: "Este producto ya se encuentra en nuestra base de datos",
    });
  }
}

export const addProductCart = async (req, res) => {
  const { name, img, price } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnProducts = await Product.findOne({ name });

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = name !== "" && img !== "" && price !== "";

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({ name });

  /* Si no tenemos el producto */
  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newProductInCart = new Cart({ name, img, price, amount: 1 });

    /* Y actualizamos la prop inCart: true en nuestros productos */
    await Product.findByIdAndUpdate(
      estaEnProducts?._id,
      { inCart: true, name, img, price },
      { new: true }
    )
      .then((product) => {
        newProductInCart.save();
        res.json({
          mensaje: `El producto fue agregado al carrito`,
          product,
        });
      })
      .catch((error) => console.error(error));

    /* Y si esta en el carrito avisamos */
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};

//----------------------------------------------

export const deleteAll = async (req, res) => {
  
  await Product.updateMany({ __v:0 }, { inCart: false })

  await Cart.deleteMany({});


  const cart = await Cart.find();

  res.json({ cart })
}

export const deleteProduct = async (req, res) => {
  const { id } = await req.params;

  console.log(id)

  /* Buscamos el producto en el carrito */
  const productInCart = await Cart.find({_id : id});

  console.log(productInCart[0].name)

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { name, img, price, _id } = await Product.findOne({
    name: productInCart[0].name,
  });

  /* Buscamos y eliminamos el producto con la id */
  await Cart.deleteOne({ _id: id });

  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */
  await Product.findByIdAndUpdate(
    _id,
    { inCart: false, name, img, price },
    { new: true }
  )
    .then((product) => {
      res.json({
        mensaje: `El producto ${product.name} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
};

//---------------------------------------

export const getProductsCart = async (req, res) => {
  const productsCart = await Cart.find();

  if (productsCart) {
    res.json({ productsCart });
  } else {
    res.json({ mensaje: "No hay productos en el carrito" });
  }
};

//---------------------------------------

export const putProduct = async (req, res) => {
  const { id } = req.params;
  const { query } = req.query;
  const body = req.body;

  /* Buscamos el producto en el carrito */
  const productBuscado = await Cart.find({_id : id});

  /* Si no hay query 'add' o 'del' */
  if (!query) {
    res.status(404).json({ mensaje: "Debes enviar una query" });

    /* Si esta el producto en el carrito y quiero agregar */
  } else if (productBuscado && query === "add") {
    body.amount = body.amount + 1;

    await Cart.updateOne({ _id: id }, { $set: body }).then((product) => {
      res.json({
        mensaje: `El producto: ${productBuscado[0].name} fue actualizado`,
        product,
      });
    });

    /* Si esta el producto en el carrito y quiero sacar */
  } else if (productBuscado && query === "del") {
    body.amount = body.amount - 1;

    await Cart.updateOne({ _id: id }, { $set: body }).then((product) =>
      res.json({
        mensaje: `El producto: ${productBuscado[0].name} fue actualizado`,
        product,
      })
    );
  } else {
    res.status(400).json({ mensaje: "Ocurrio un error" });
  }
};
