const fs = require("fs")

const savedata = (req, res) => {
    const newData = req.body;
    fs.readFile("./utils/userData.json", (err, data) => {
        if (err) {
            res.status(404).json({ error: "internal server error" })
        }
        else {

            const myData = JSON.stringify([...JSON.parse(data),newData]);
            fs.writeFile("./utils/userData.json", myData, (error) => {
                if (error) {
                    res.status(404).json({ message: "internal error" });
                } else {
                    res.status(201).json({ message: "user created" });
                }
            });
        }
    })


}

module.exports = savedata;