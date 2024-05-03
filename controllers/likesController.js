//------------- Import -------------
const { addLike, delLike } = require('../services/likesService.js');

//------------- Methods -------------
exports.addLike = async (req, res) => {
    const like = await addLike(req.params.tag, req.user.idUser);
    if (like) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors du like"});
    }
}

exports.delLike = async (req, res) => {
    const like = await delLike(req.params.tag, req.user.idUser);
    if (like) {
        res.status(204).send();
    } else {
        res.status(422).json({success: false, message: "Erreur lors de la suppression du like"});
    }
}