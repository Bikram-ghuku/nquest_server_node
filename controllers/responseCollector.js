const fs = require('fs')

const resCol = (req, res) => {

    console.log(req.body.sys_no)
    console.log(req.body.lab_no)
    console.log(req.body.qpaper)
    console.log(req.body.questions)
    console.log(req.body.response)
}

module.exports = resCol

