const express = require('express')
const Skill = require('../models/skill');
const skillsRouter = express.Router();

//Index
skillsRouter.get('/', (req, res) => {
    Skill.find({}, (error, allSkills) => {
        res.json(
         allSkills
        )
    })
})

//Create
skillsRouter.post("/", (req, res) => {
    Skill.create(req.body, (error, createdSkill) => {
        res.json(createdSkill)
    })
})

module.exports = skillsRouter;