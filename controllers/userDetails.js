const offuser = {
    "lab_no": "L001",
    "system_id": "C001",
    "user": "student",
    "id_no": "56700786",
    "dob": "12345678",
    "exam_name": "LOL EXAM"
}

const userdetails = (req, res) =>{
    res.send(offuser)
}

module.exports = userdetails