const jwt = require('jsonwebtoken');
const db = require('../models/index');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access forbidden: You must be logged in to do this' });
    }

    jwt.verify(token, process.env.secretKey, async (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Access forbidden: The token is invalid' });
        }

        req.user = user;
        next();
    });
}

exports.login = async (req, res) => {
    let user = await db.users.findOne({
        where: {mail: req.body.mail}
    });

    if (user&&user.state!="undergoing verification") {
        //let verifiedUser = await bcrypt.compare(req.body.password, user.password);
        let verifiedUser = req.body.password == user.password;
        if (verifiedUser) {
            const token = jwt.sign({ idUser: user.idUser, mail: user.mail }, process.env.secretKey);
            return res.status(200).json({ success: true, token });
        } else {
            return res.status(401).json({success: false, message: 'Mot de passe / Mail incorrecte'});;
        }
    } else {
        return res.status(404).json({success: false, message: 'Mot de passe / Mail incorrecte'});
    }
}