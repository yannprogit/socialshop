//------------- Import -------------
const { addFavorite, delFavorite } = require('../services/favoritesService.js');

//------------- Methods -------------
exports.addFavorite = async (req, res) => {
    const favorite = await addFavorite(req.params.tag, req.user.idUser);
    if (favorite) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors du favorite"});
    }
}

exports.delFavorite = async (req, res) => {
    const favorite = await delFavorite(req.params.tag, req.user.idUser);
    if (favorite) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors de la suppression du favorite"});
    }
}