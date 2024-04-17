//------------- Import -------------
const db = require('../models/index.js');

//------------- Methods -------------
//Add a user
exports.addUser = async (name, mail, password, state, phone, description, date_birth, country, city, zip_code, address, address_supplement) => {
    const mailExist = await db.users.findOne({
        where: {
            mail
        }
    });
    if (!mailExist) {
        return await db.users.create({
            name,
            mail,
            password,
            state,
            phone,
            description,
            date_birth,
            country,
            city,
            zip_code,
            address,
            address_supplement
        });
    }
    else {
        return false;
    }

}