const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';

const fetchuser = (req, res, next) => {
   
     const userToken = req.header('auth-token');
     if (!userToken) {
          return  res.status(401).json({error:"Please Authenticate using a valid  token"})
     }
     try {
          var dataDecode = jwt.verify(userToken, JWT_SECRET);
          req.user = dataDecode.user;
          next()
     } catch (error) {
          return  res.status(401).json({error:"Please Authenticate using a valid  token"})
     }     
}

module.exports = fetchuser;