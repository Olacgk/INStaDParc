const bcrypt = require('bcrypt');
// const jsonwebtoken = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const User = require('../model/Users');

exports.addUser = (req , res , next )=>{
  bcrypt.hash("Code_temporaire", 10)
  .then(hash => {
    const user = new User({
        name: req.body.name,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        fonction: req.body.fonction,
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
        userFonction : user.fonction,
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
