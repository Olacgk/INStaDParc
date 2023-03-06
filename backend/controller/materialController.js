const Material = require('../model/Materiel');

exports.addMaterial = (req , res , next )=>{
    const material = new Material({
        numImmatriculation: req.body.numImmatriculation,
        // numSerie: req.body.numSerie,
        description: req.body.description,
        etat: req.body.etat,
        proprietaire: req.body.proprietaire,
        available: req.body.available,
        // borrowerName: req.body.borrowerName,
        utilisateur: req.body.utilisateur,
        dateAcquisition: req.body.dateAcquisition,
        dateMiseEnService: req.body.dateMiseEnService,
        // dateFinService: req.body.dateFinService,
        type: req.body.type,
        marque: req.body.marque,
    });
    material.save()
      .then(() => res.status(201).json({ message: 'Materiel créé !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.getOneMaterial = (req , res , next )=>{
    Material.findOne({ _id: req.params.id })
    .then(material => res.status(200).json(material))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllMaterials = (req , res , next )=>{
    Material.find()
    .then(materials => res.status(200).json(materials))
    .catch(error => res.status(400).json({ error }));
}

exports.modifyMaterial = (req , res , next )=>{
    const material = new Material({
        _id: req.params.id,
        numImmatriculation: req.body.numImmatriculation,
        numSerie: req.body.numSerie,
        description: req.body.description,
        etat: req.body.etat,
        proprietaire: req.body.proprietaire,
        available: req.body.available,
        borrowerName: req.body.borrowerName,
        utilisateur: req.body.utilisateur,
        dateAcquisition: req.body.dateAcquisition,
        dateMiseEnService: req.body.dateMiseEnService,
        dateFinService: req.body.dateFinService,
        type: req.body.type,
        marque: req.body.marque,
    });
    Material.updateOne({_id: req.params.id}, material)
      .then(() => res.status(201).json({ message: 'Materiel modifié !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.deleteMaterial = (req , res , next )=>{
    Material.deleteOne({_id : req.params.id})
    .then(() => res.status(200).json({ message: 'Materiel supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}