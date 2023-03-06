const Direction = require('../model/Direction');

exports.addDirection = (req , res , next )=> {
    const direction = new Direction({
        abbrv: req.body.abbrv,
        nomDirection: req.body.nomDirection,
    });
    direction.save()
        .then(() => res.status(201).json({ message: 'Direction créée !' }))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneDirection = (req , res , next )=>{
    Direction.findOne({ _id: req.params.id })
    .then(direction => res.status(200).json(direction))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllDirections = (req , res , next )=>{
    Direction.find()
    .then(directions => res.status(200).json(directions))
    .catch(error => res.status(400).json({ error }));
}

exports.getIdByAbbrv = (req , res , next )=>{
    Direction.findOne({abbrv: req.body.abbrv})
    .then(direction => res.status(200).json(direction._id))
    .catch(error => res.status(400).json({ error }));
}