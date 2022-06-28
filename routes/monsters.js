const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Monsters = require('../models/Monsters');
const Mons = require('../models/Monsters');

// Get monsters list
router.get('/', (req, res) => 
    Mons.findAll({ raw: true })
    .then(monsters => {
        res.render('monsters', {
            monsters
        });
    })
    .catch(err => console.log(err)));

// Add a monster
router.get('/add', (req, res) => {
    const data = {
        name: 'Zombie',
        description: `Watch out! These monsters are ferocious and not too mention mindless. 
        Driven by an insane hunger Zombies roam the world and eat just about anything that moves.
        Lucky for us the Zombie is a very slow moving monster and has a ton of weaknesses. 
        Best practice is to always aim for the head.`
    }

    let { name, description } = data;

    // this will insert the data into a table
    Monsters.create({
        name,
        description
    })
    .then(monsters => res.redirect('/monsters'))
    .catch(err => console.log(err));
})
module.exports = router;