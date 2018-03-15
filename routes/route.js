const { Router } = require("express");
const router = Router();
const path = require("path");

router.get('/home', (req, res) => {
    console.log("Home Page");
    res.sendFile(path.join(__dirname, '../public', "home.html"))
})
router.get('/see-our-chickens', (req, res) => {
    console.log("Check out chickens");
    res.sendFile(path.join(__dirname, '../public', "see-our-chickens.html"))
})
router.get('/see-our-eggs', (req, res) => {
    console.log("You found the Easter Egg at Mon Sep 12 2016 15:36:57 GMT-0500 (CDT)")

    console.log("    ,ggadddd8888888bbbbaaa,_")
    console.log(",ad888,      `Y88,      `Y888baa,")
    console.log(',dP"  "Y8b,      `"Y8b,      `"Y8888ba,')
    console.log(',88      "Y88b,      `"Y8ba,       `"Y88Ya,')
    console.log(',P88b,      `"Y88b,       `"Y8ba,_       ""8a,')
    console.log(',P "Y88b,        "Y88b,        `"Y8ba,_      `Ya,')
    console.log('8     "Y88b,        ""Y8ba,         ""Y8ba,_   `8,')
    console.log('8b       "Y88b,         ""Y8ba,_         ""Y88baaY')
    console.log('88b,        "Y88ba,         ""Y88ba,_         `""P')
    console.log('8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P')
    console.log('`b,"Y88ba,         ""Y88baa,_         """Y888bd"')
    console.log('`b, `"Y88ba,_         ""Y888baa,_         ,8"')
    console.log('`8,   `""Y88ba,_         `"""Y8888baaaaaP"')
    console.log('`Ya,     `""Y888ba,_           `"d88P"')
    console.log('`"Yb,,_     `""Y888baa,__,,adP""')
    console.log('`"""YYYY8888888PPPP""" "');
    res.sendFile(path.join(__dirname, '../public', "see-our-eggs.html"))
})

module.exports = router;