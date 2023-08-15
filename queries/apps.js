const db = require("../db/dbConfig.js");

// ALL Apps
const getAllApps = async () => {
    try {
        const allApps = await db.any("SELECT * FROM socialmedia");
        return allApps;
    }
    catch (error) {
        return error;
    }
};

// ONE App
const getApp = async (id) => {
    try {
        const oneApp = await db.one("SELECT * FROM socialmedia WHERE id=$1", id);
        return oneApp;
    }
    catch (error) {
        return error;
    }
};

// CREATE
const createApp = async (app) => {
    try {
        const newApp = await db.one(
            "INSERT INTO socialmedia (name, rating, launched, ma_users, website, logo_link, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [app.name, app.rating, app.launched, app.ma_users, app.website, app.logo_link, app.is_favorite]
        );
        return newApp;
    }
    catch (error) {
        return error;
    }
};

// DELETE
const deleteApp = async (id) => {
    try {
        const deletedApp = await db.one(
            "DELETE FROM socialmedia WHERE id = $1 RETURNING *", id
        );
        return deletedApp;
    }
    catch (error) {
        return error;
    }
};

// UPDATE
const updateApp = async (id, app) => {
    try {
        const updatedApp = await db.one(
            "UPDATE socialmedia SET name=$1, rating=$2, launched=$3, ma_users=$4, website=$5, logo_link=$6, is_favorite=$7 where id=$8 RETURNING *",
            [app.name, app.rating, app.launched, app.ma_users, app.website, app.logo_link, app.is_favorite, id]
        );
        return updatedApp;
    }
    catch (error) {
        return error;
    }
};
  
module.exports = {
    getAllApps,
    getApp,
    createApp,
    deleteApp,
    updateApp
};
