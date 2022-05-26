import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    //saving
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }); 
    user.password = await user.encryptPassword(user.password)
    const savedUser = await user.save();
    //token
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_TOKEN || 'token-test');

    res.header('auth-token', token).json(savedUser);
}

export const signin = async (req, res) => {
    //validate
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).json('email or password doesnt match');

    const correctPassword = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('invalid password');
    //token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN || 'token-test', {
        expiresIn: 60 * 60 * 4
    });

    res.header('auth-token', token).json({user, token});
    console.log(req.userId)
}

export const profile = async (req, res) => {
    const user = await User.findById(req.userId, { password: 0 })
    if(!user) return res.status(404).json("no user found");
    res.json(user);
}