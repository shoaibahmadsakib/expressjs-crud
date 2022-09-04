const fs = require("fs")

const allUser = (req, res) => {
    fs.readFile("./utils/userData.json", (err, data) => {
        if (err) {
            res.status(404).json({ error: "internal server error" })
        }
        else {
            const userData = JSON.parse(data)
            const { limit, page } = req.query;
            const allUser = userData.slice(0, limit)
            if (allUser.length !== 0) {
                res.status(200).send(allUser);
              } else {
                res.status(200).json({ message: "No data found" });
              }
            res.json(allUser)
        }
    })

}

module.exports = allUser;
