const fs = require("fs")

const randomUser = (req, res) => {
    fs.readFile('./utils/userData.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(200).json({ error: 'internal error' })
        }
        else {
            const userData = JSON.parse(data)
            if (userData.length === 0) {
                res.status(404).json({ message: "no data found" });
              } else {
                const dataCount = userData.length;
            
                const randomUserIndex = Math.floor(Math.random() * dataCount);
                console.log(randomUserIndex);
                res.status(200).send(userData[randomUserIndex])
               
              }
        }

    })
}

module.exports = randomUser;