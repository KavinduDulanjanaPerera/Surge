const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        userName:request.body.firstName,
        email:request.body.email,
        password:request.body.password,
        dateOfBirth:request.body.dateOfBirth,
        mobile:request.body.mobile,
        Status:request.body.Status,
        accountType:request.body.accountType,
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router 