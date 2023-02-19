const Marque = require('../model/Marque');

exports.addMarque = (req , res , next )=>{
    const marque = new Marque({
        nomMarque: req.body.nomMarque,
    });
    marque.save()
      .then(() => res.status(201).json({ message: 'Marque créée !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.getOneMarque = (req , res , next )=>{
    Marque.findOne({ _id: req.params.id })
    .then(marque => res.status(200).json(marque))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllMarques = (req , res , next )=>{
    Marque.find()
    .then(marques => res.status(200).json(marques))
    .catch(error => res.status(400).json({ error }));
}

exports.modifyMarque = (req , res , next )=>{
    const marque = new Marque({
        _id: req.params.id,
        nom: req.body.nom,
    });
    Marque.updateOne({_id: req.params.id}, marque)
      .then(() => res.status(201).json({ message: 'Marque modifiée !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.deleteMarque = (req , res , next )=>{
    Marque.deleteOne({_id : req.params.id})
    .then(() => res.status(200).json({ message: 'Marque supprimée !'}))
    .catch(error => res.status(400).json({ error }));
}