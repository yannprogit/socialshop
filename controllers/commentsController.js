//------------- Import -------------
const { addComment, delComment, getComment, updComment, getComments } = require('../services/commentsService.js');

//------------- Methods -------------
exports.addComment = async (req, res) => {
    
    const comment = await addComment(req.body.comment, req.body.tag, req.user.idUser);

    if (comment) {
        res.status(201).json({success: true, data: comment});
    } 
    else {
        res.status(400).json({success: false, message: "Une erreur s'est produite lors de l'ajout de votre commentaire"});
    }
}

exports.delComment = async (req, res) => {
    const comment = await getComment(req.params.id);
    if (req.user.idUser==comment.idUser) {
        const comment = await delComment(req.params.id);
        if (comment) {
            res.status(204).send();
        } else {
            res.status(422).json({success: false, message: "Erreur lors de la suppression du commentaire"});
        }
    } else {
        res.status(401).json({success: false, message: "Vous ne pouvez pas supprimer un commentaire qui ne vous appartient pas"});
    }
}

exports.updComment = async (req, res) => {
    const comment = await getComment(req.params.id);
    if (req.user.idUser==comment.idUser) {
        const comment = await updComment(req.params.id, req.body.comment);
        if (comment) {
            res.status(204).send();
        } else {
            res.status(422).json({success: false, message: "Erreur lors de la modification du commentaire"});
        }
    } else {
        res.status(401).json({success: false, message: "Vous ne pouvez pas modifier un commentaire qui ne vous appartient pas"});
    }
}

exports.getComment = async (req, res) => {
    const comment = await getComment(req.params.id);
    if (comment) {
        res.status(200).json({success: true, data: comment});
    } else {
        res.status(404).json({success: false, message: "Ce commentaire n'existe pas"});
    }
}

exports.getComments = async (req, res) => {
    const comments = await getComments(req.body.tag);
    res.status(200).json({success: true, data: comments});
}