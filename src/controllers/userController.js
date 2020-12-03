const User = require('../models/userModel')

function handleError(error){
    let err = { username: '', email: '', password: ''}
    if(error.message === 'incorrect username'){
        err.username = 'that username does not exist'
    }
    if(error.message === 'incorrect email'){
        err.email = 'that email is not valid'
    }
    if(error.message === 'incorrect password'){
        err.password = 'the password is incorrect'
    }
    if(error.code === 11000){
        err.email = 'that email is registered already'
        return err
    }
    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({ properties }) => {
            err[properties.path] = properties.message
        })
    }
    return err
}

const userCtrl = {}

// creat a user = POST method  
userCtrl.createUser = async (req, res)  => {
    try{
        let newUser =new User(req.body)
        let result = await newUser.save()
        res.status(200).send({ message: 'your accout has been created', result})

    } catch( error) {
        const wainings = handleError(error)
        res.status(400).json({warnings})
        //console.log(error)

    }

}

//read a user detail = GET method

userCtrl.getUserDetails =async (req, res) => {
    try{
        let person =  await User.find({ username: req.body.username })
        //res.status(200)({ message: 'we found the user', person})
        if(!person){
            res.status(400).send({message: 'user does not exist, check palent mars'})
        
        }else{
            res.status(200).send({ message: 'welcome back to earth, the user exists',person})
        }

    }catch (error) {
        const wainings = handleError(error)
        res.status(400).json({warnings})
        //console.log( error)
    }
}
// udate a user detail =  UPDATE/PUT method
userCtrl.updateUserDetails =async (rep, res) => {
    const { username, email, password } = reg.body
  try{
      await User.findOneAndUpdate({ _id: req.parans.id}, {username, email, password})
      res.status(200).send({message: 'user account updated', person})


  } catch (error) {
    const wainings = handleError(error)
    res.status(400).json({warnings})
      //console.log(error)
  }
}

  // delete a user account = DELETE method
  userCtrl.deleteUserAccount = async (rep, res) => {
      try{
         let person= await User.findOneAndDelete({_id: req.params.id})
         res.status(200).send({message: 'user accout deleted'})

      } catch (error) {
        const wainings = handleError(error)
        res.status(400).jason({warnings})
         // console.log(error)
      }
  }



module.exports = userCtrl