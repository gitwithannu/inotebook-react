const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const JWT_SECRET = 'Harryisagoodb$oy';
const fetchuser = require("../middleware/fetchuser");


/* router.post('/', (req, res) => {
     console.log(req.body);
     const  user = User(req.body);
     user.save();
     res.send(req.body)
}) */
/** Create user no need to Authenticate  **/
router.post('/createuser',
     body('name', 'Please Enter minimum 3 letters ').isLength({
          min: 3
     }),
     body('email').isEmail(),
     body('password').isLength({
          min: 5
     }),
     async (req, res) => {
          // Finds the validation errors in this request and wraps them in an object with handy functions
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({
                    errors: errors.array()
               });
          }
          let user = await User.findOne({
               email: req.body.email
          })
          if (user) {
               return res.status(400).json({
                    errors: 'Email id Already in use'
               });
          }
          const salt = await bcrypt.genSalt(10);
          const secPass = await bcrypt.hash(req.body.password, salt);
          user = await User.create({
               name: req.body.name,
               email: req.body.email,
               password: secPass,
          })
          const data = {
               user: {
                    id: User.id
               }
          }
          const jwtToken = jwt.sign(data, JWT_SECRET);
          console.log(jwtToken);
          res.json({
               'response': 'successful',
               jwtToken
          })
     })

/** Login user  need to Authenticate  **/
router.post('/login',
     body('email').isEmail(),
     body('password').exists(),
     async (req, res) => {
          let success = false
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({
                    errors: errors.array()
               });
          }
          const { email, password } = req.body;
          try {
               let user = await User.findOne({  email   });
               if (!user) {
                return res.status(400).json({
                    success , errors: 'Please try to login with Correct Credentials'
                });
               }
               const passwordCompare = await bcrypt.compare(password, user.password)
               if (!passwordCompare) {
                    return res.status(400).json({ success , errors: 'Please try to login with Correct Credentials' });     
               }
               let data = {
                    user : {
                         id: user.id
                    }
               }
               const authToken = jwt.sign(data, JWT_SECRET)
               let success= true
               return res.json({ success, authToken });               
          } catch (error) {
               let success = false
               return res.status(500).json({ success, errors: 'Server error' });           
          }

     })
     // get user authenticate require

 router.post('/getuser', fetchuser, async(req, res) => {
     try {
          const userId = req.user.id;
          const user = await User.findById(userId).select("-password");
          return res.status(200).json(user);
               
          } catch (error) {
               return res.status(500).json({ errors: 'Server error' });           
          }
     })

module.exports = router