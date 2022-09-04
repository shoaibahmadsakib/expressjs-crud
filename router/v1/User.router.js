const express = require("express");
const allUser = require("../../controller/allData");
const bulkUpdate = require("../../controller/bulkUpdate");
const randomUser = require("../../controller/randomUser");
const savedata = require("../../controller/saveData");
const updateUser = require("../../controller/updateUser");
const deleteUser = require("../../controller/deleteUser")


const router = express.Router()


router
/**
     * @api {get} /random select a random user
     * @description  select a random user
     * @success find a random user
     *  **/
    .get("/random", randomUser)
    /**
     * @api {get} /all 
     * @description  all user display
     * @success  show all user
     *  **/
    .get("/all", allUser)
    /**
     * @api {post}
     * @description
     * @success
     *  **/
    .post("/save", savedata)
    /**
     * @api {put}
     * @description
     * @success
     *  **/
    .put("/:id", updateUser)
    /**
     * @api {patch}
     * @description
     * @success
     *  **/
    .patch("/bulk-update/", bulkUpdate)
    /**
     * @api {delete}
     * @description
     * @success
     *  **/
    .delete("/:id", deleteUser)

module.exports = router;