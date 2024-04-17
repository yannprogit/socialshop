//------------- Import -------------
const { addUser } = require('../services/usersService.js');
const bcrypt = require('bcrypt');

//------------- Methods -------------

//Add a user
exports.addUser = async (req, res) => {
    let state = "active";
    const user = await addUser(req.body.name, req.body.mail, req.body.password, state, req.body.phone, req.body.description, req.body.date_birth, req.body.country, req.body.city, req.body.zip_code, req.body.address, req.body.address_supplement); //await bcrypt.hash(req.body.password, 10) pour plus tard
    if (user) {
        res.status(201).json({success: true, user: user});
    } else {
        res.status(422).json({success: false, message: "Ce mail est déjà utilisé"});
    }
}
