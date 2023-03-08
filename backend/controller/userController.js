const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/Users');
const Service = require('../model/Service');

exports.addUser = (req , res , next )=>{
  bcrypt.hash("Code_temporaire", 10)
  .then(hash => {
    const user = new User({
        name: req.body.name,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        // fonction: req.body.fonction,
        service: req.body.service,
        direction: req.body.direction,
    });
    user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' , user:{email: req.body.email , password: "Code_temporaire"}}))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
}

exports.login = (req , res , next )=>{
  User.findOne({email : req.body.email})
  .then(user=>{
    if(!user){
      return res.status(401).json({error : "Utilisateur non trouvé"});
    }
    bcrypt.compare(req.body.password , user.password)
    .then(valide =>{
      if(!valide){
        return res.status(401).json({error : "Email ou Mot de passe incorrect"});
      }
      res.status(200).json({ 
        userId : user._id ,
        userName : user.name,
        userPrenom : user.prenom,
        userRole : user.role,
        // userFonction : user.fonction,
        userService : user.service,
        userDirection : user.direction, 
        token : jwt.sign(
          { userId : user._id } , 
          'RANDOM_TOKEN_SECRET' , 
          { expiresIn : '24h' }
        )
      });
    })
    .catch(error =>{
      return res.status(500).json({error});
    })
  })
  .catch(error =>{
    return res.status(500).json({error});
  })
}

exports.deleteUser = (req , res , next )=>{
  User.deleteOne({_id : req.params.id})
  .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
  .catch(error => res.status(400).json({ error }));
}

exports.modifyUser = (req , res , next )=>{
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
        _id: req.params.id,
        name: req.body.name,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        // fonction: req.body.fonction,
        service: req.body.service,
        direction: req.body.direction,
    });
    User.updateOne({_id: req.params.id}, user)
      .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
}

exports.getAllUsers = (req , res , next )=>{
  User.find()
  .populate('service')
  .exec()
  .then(users => {
    const usersWithService = users.map(user => {
      return {
        _id: user._id,
        name: user.name,
        prenom: user.prenom,
        email: user.email,
        role: user.role,
        service: user.service.abbrv,
        direction: user.direction,
      };
    });
    res.status(200).json(usersWithService)})
  .catch(error => res.status(400).json({ error }));
}

exports.getOneUser = (req , res , next )=>{
  User.findOne({_id : req.params.id})
  .populate('service')
  .populate('direction')
  .exec()
  .then(user => {
    const oneUser = {
      _id: user._id,
      name: user.name,
      prenom: user.prenom,
      email: user.email,
      role: user.role,
      service: user.service.nomService,
      direction: user.direction.nomDirection,
    };
    res.status(200).json(oneUser)})
  .catch(error => res.status(404).json({ error }));
}