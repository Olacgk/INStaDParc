const Material = require('../model/Materiel');
const type = require('../model/Type');
const marque = require('../model/Marque');

exports.addMaterial = (req , res , next )=>{
    const material = new Material({
        numImmatriculation: req.body.numImmatriculation,
        // numSerie: req.body.numSerie,
        description: req.body.description,
        etat: req.body.etat,
        proprietaire: req.body.proprietaire,
        available: req.body.available,
        // utilisateur: req.body.utilisateur,
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
    .populate('type')
    .populate('marque')
    .exec()
    .then(materials => {
        const response = materials.map(material => {
            return {
                _id : material._id,
                numImmatriculation: material.numImmatriculation,
                type: material.type.nomType,
                marque: material.marque.nomMarque,
                description: material.description,
                etat: material.etat,
                proprietaire: material.proprietaire,
                available: material.available,
                dateAcquisition: material.dateAcquisition,
                dateMiseEnService: material.dateMiseEnService,
            }
        });
        res.status(200).json(response)})
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