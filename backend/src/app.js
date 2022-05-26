import MongoStore from 'connect-mongo';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import passportLocal from './middlewares/passport.js';
import productsRoutes from './routes/products.js'
import session from 'express-session';

const app = express();

//sett
app.set('port', process.env.PORT || 4000);

//middl
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(
    session({
      store: MongoStore.create({
        mongoUrl:
          'mongodb+srv://login:service@cluster0.fgqy0.mongodb.net/loginService?retryWrites=true&w=majority',
        ttl: 60
      }),
      secret: "123-456-789",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 600 },
      rolling: true,
    })
  );

app.use(cookieParser("secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passportLocal(passport);

//rout
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);

export default app;