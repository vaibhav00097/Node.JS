// ------------------------------------ Module – 6: Node - [API Authentication & Security]  -------------------------------------------------


//---------------------------------- Q1. What is Middleware in Express.js? -------------------------------------------//


//  => The middleware in node. js is a function that will have all the access for requesting an object,
// responding to an object, and moving to the next middleware function in the application request - response cycle.



//------------------------------------- Q2. What is json web tokens? --------------------------------//

// => JSON Web Token(JWT) is an open standard(RFC 7519) that defines a compact and self - contained way for securely transmitting information between parties as
// a JSON object. This information can be verified and trusted because it is digitally signed.



const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const PORT = 8000;


const createToken = async () => {
    const token = await jwt.sign({ _id: "8899koiuomenu24411sdwe56vd5522" }, "mynameisvaibhavmathukiyawebdevlopars");
    console.log(token);

    const userVer = await jwt.verify(token, "mynameisvaibhavmathukiyawebdevlopars");
    console.log(userVer);
}
createToken();

app.listen(PORT, () => {
    console.log("server runnig on port :" + PORT);
})



//--------------------------------- Q3. What is different between encryption and hashing. ---------------------------//

//   => Hashing is a one - way process that converts a password to ciphertext using hash algorithms.A hashed password cannot be decrypted,
// but a hacker can try to reverse engineer it.Password salting adds random characters before or after a password prior to hashing to obfuscate the actual password.
