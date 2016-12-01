function greeting(req, res, next){
    req.greeting = "Yo!";
    next();
}

module.exports = greeting;