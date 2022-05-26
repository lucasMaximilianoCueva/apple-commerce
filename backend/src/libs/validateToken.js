import jwt from 'jsonwebtoken';

export const TokenValidation = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json('access denied');

    const payload = jwt.verify(token, process.env.JWT_TOKEN || 'test-token');
    req.userId = payload._id;

    next();
}