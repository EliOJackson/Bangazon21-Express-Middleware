const { Router } = require("express");
const router = Router();
const path = require("path");

router.get('/home', (req, res) => {
    console.log("Home Page");
    res.sendFile(path.join(__dirname, '../public', "home"))
})
router.get('/see-our-chickens', (req, res) => {
    console.log("Check out chickens");
    res.sendFile(path.join(__dirname, '../public', "see-our-chickens"))
})
router.get('/see-our-eggs', (req, res) => {
    console.log("Egg me baby");
    res.sendFile(path.join(__dirname, '../public', "see-our-eggs"))
})

module.exports = router;