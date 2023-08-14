const express = require("express");
const apps = express.Router();
const { checkName, checkWebsite, checkBoolean } = require("../validations/checkApps");
const {
  getAllApps,
  getApp,
  createApp,
  deleteApp,
  updateApp
} = require("../queries/apps.js");

// INDEX
apps.get("/", async (req, res) => {
  console.log("get request made to apps route")
  const allApps = await getAllApps();
  if (allApps[0]) {
    res.status(200).json(allApps);
  }
  else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
apps.get("/:id", async (req, res) => {
  const { id } = req.params;
  const app = await getApp(id);
  if (app) {
    res.json(app);
  }
  else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
apps.post("/", checkName, checkWebsite, checkBoolean, async (req, res) => {
  try {
    const app = await createApp(req.body);
    res.json(app);
  }
  catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
apps.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApp = await deleteApp(id);
  if (deletedApp.id) {
    res.status(200).json(deletedApp);
  }
  else {
    res.status(404).json("Song not found!");
  }
});

// UPDATE
apps.put("/:id", checkName, checkWebsite, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedApp = await updateApp(id, req.body);
  res.status(200).json(updatedApp);
});

module.exports = apps;
