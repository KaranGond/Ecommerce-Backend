const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const cartService = require("../services/cart.service.js");
const bcrypt = require('bcrypt');
const cartService = require("../services/cartService.js")

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const token = jwtProvider.generateToken(user._id);
        await cartService.createCart(user);
        return res.status(200).send({ token, message: "Register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(400).send({ message: 'User not found with this email', email });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password" });
        }
        const jwtToken = jwtProvider.generateToken(user._id);
        return res.status(200).send({ jwt: jwtToken, message: "Login success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
module.exports = {
    register,
    login
};