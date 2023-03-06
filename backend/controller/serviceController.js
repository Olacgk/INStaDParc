const Service = require('../model/Service');
const Direction = require('../model/Direction');

const dirfunction = require('../controller/directionController');

exports.addService = (req , res , next )=>{
    const service = new Service({
        abbrv: req.body.abbrv,
        nomService: req.body.nomService,
        direction: req.body.direction,
    });
    service.save()
      .then(() => res.status(201).json({ message: 'Service créé !' }))
      .catch(error => res.status(400).json({ error }));
}

exports.getOneService = (req , res , next )=>{
    Service.findOne({ _id: req.params.id })
    .then(service => res.status(200).json(service))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllServices = (req , res , next )=>{
    Service.find()
    .then(services => res.status(200).json(services))
    .catch(error => res.status(400).json({ error }));
}

exports.getServicesByDirection = async (req , res , next )=>{
    const direction_id = req.params.id;

  try {
    // const direction = await Direction.findOne({ abbrv: abbrv }).exec();
    const services = await Service.find({ direction: direction_id }).exec();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des services');
  }
}