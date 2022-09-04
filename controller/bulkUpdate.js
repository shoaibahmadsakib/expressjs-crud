const fs = require("fs");

const bulkUpdate = (req, res) => {
  const error = req.error;
  const updateData = req.body;
  if (!error) {
    fs.readFile("./database/database.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "internal error" });
      } else {
        let allUser = JSON.parse(data);
        for (const updateInfo of updateData) {
          const updateIndex = allUser?.findIndex(
            (user) => user.id == updateInfo.id
          );
          const updateDataIndex = updateData?.findIndex(
            (user) => user.id == updateInfo.id
          );
          if (updateIndex > -1) {
            allUser[updateIndex] = {
              ...allUser[updateIndex],
              ...updateData[updateDataIndex],
            };
            fs.writeFile(
              "./database/database.json",
              JSON.stringify(allUser),
              (error) => {
                if (error) {
                  res.status(500).json({ message: "internal error" });
                } else {
                  res.status(201).json({ message: "users Updated" });
                }
              }
            );
          } else {
            throw new Error("Didn't find the user!");
            return;
          }
          console.log(allUser);
        }
      }
    });
  }
};

module.exports = bulkUpdate;
