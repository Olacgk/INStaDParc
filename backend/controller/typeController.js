const Type = require('../model/Type');

exports.addType = (req , res , next )=>{
    const type = new Type({
        nomType: req.body.nomType,
    });
    type.save()
      .then(() => res.status(201).json({ message: 'Type créé !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.getOneType = (req , res , next )=>{
    Type.findOne({ _id: req.params.id })
    .then(type => res.status(200).json(type))
    .catch(error => res.status(404).json({ error }));
}       

exports.getAllTypes = (req , res , next )=>{
    Type.find()
    .then(types => res.status(200).json(types))
    .catch(error => res.status(400).json({ error }));
}

exports.modifyType = (req , res , next )=>{
    const type = new Type({
        _id: req.params.id,
        nomType: req.body.nomType,
    });
    Type.updateOne({_id: req.params.id}, type)
        .then(() => res.status(201).json({ message: 'Type modifié !' }))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteType = (req , res , next )=>{
    Type.deleteOne({_id : req.params.id})
    .then(() => res.status(200).json({ message: 'Type supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}