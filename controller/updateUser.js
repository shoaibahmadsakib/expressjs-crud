const fs = require("fs")

const updateUser = (req, res) => {

    const { id } = req.params;
    console.log(id);
    const newData = req.body;
    const { error, user } = req || {};
    if (error) {
        res.status(404).json({ error: "internal server error" });
    } else {
        const newUser = { ...newData , ...user };
        fs.readFile("./utils/userData.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "internal error" });
            } else {
                const allUser = JSON.parse(data);
                const all = allUser.filter(data => data.id != id)
               const update = JSON.stringify([...all , newUser])
                const newDataUpdate = fs.writeFile("./utils/userData.json",update,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                       res.status(200).json({success: 'successfully update'})
                        console.log(newDataUpdate);
                    }
                })
            }
        });
    }

}

module.exports = updateUser;