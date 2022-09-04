const fs = require("fs");

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  const error = req.error;

  if (!error) {
    fs.readFile("./utils/userData.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        const myData = JSON.parse(data);
        const newData = myData.filter((user) => user.id != id);
        fs.writeFile(
          "./utils/userData.json",
          JSON.stringify(newData),
          (error) => {
            if (error) {
              res.status(500).json({ message: "internal error" });
            } else {
              console.log(newData);
              res.status(200).json({ message: "user deleted" });
            }
          }
        );
      }
    });
  }
};

module.exports = deleteUser;
