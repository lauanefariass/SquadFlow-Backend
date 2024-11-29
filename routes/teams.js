const express = require("express");
const router = express.Router();
const Team = require("../models/team");

router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: "Error to find a team", error });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, cargo, team, image } = req.body;

    if (!name || !cargo || !team) {
      return res
        .status(400)
        .json({ message: "Information Missing" });
    }

    const newTeam = new Team({ name, cargo, team, image });
    const savedTeam = await newTeam.save();
    res.status(201).json(savedTeam);
  } catch (error) {
    res.status(500).json({ message: "Error to Salve Team", error });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return res.status(404).json({ message: "Team not Find" });
    }

    res.status(200).json({ message: "Team deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error to delete Team", error });
  }
});

module.exports = router;
