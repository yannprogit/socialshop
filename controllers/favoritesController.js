//------------- Import -------------
const { addFavorite, delFavorite, getFavorite } = require('../services/favoritesService.js');

//------------- Methods -------------
exports.addFavorite = async (req, res) => {
    const favorite = await addFavorite(req.params.tag, req.user.idUser);
    if (favorite) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors du favori"});
    }
}

exports.delFavorite = async (req, res) => {
    const favorite = await delFavorite(req.params.tag, req.user.idUser);
    if (favorite) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors de la suppression du favori"});
    }
}

exports.getFavorite = async (req, res) => {
    const tag = req.params.tag;
    const idUser = req.user.idUser;
    const favorite = await getFavorite(idUser, tag);
    res.status(200).json({ sucess: true, data: favorite });
};