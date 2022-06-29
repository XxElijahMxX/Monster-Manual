const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Monsters = require('../models/Monsters');
const Mons = require('../models/Monsters');
const Sequelize = require('sequelize');

// Get monsters list
router.get('/', (req, res) => 
    Mons.findAll({ raw: true })
    .then(monsters => 
        res.render('monsters', {
            monsters
        }))
    .catch(err => console.log(err)));

// Display monster form
router.get('/add', (req, res) => res.render('add'));

// Add a monster
router.post('/add', (req, res) => {
    let { name, description } = req.body;
    let errors = [];

// validating the fields in the add form
    if(!name) {
        errors.push({ text: 'You did not give your monster a name' });
    }
    if(!description) {
        errors.push({ text: 'You did not give your monster any details' });
    }

    // this checks for errors
    if(errors.length > 0) {
        res.render('add', {
            errors,
            name, description
        });
    } else {
     // this will insert the data into a table
        Monsters.create({
            name,
            description
        })
        .then(monsters => res.redirect('/monsters'))
        .catch(err => console.log(err));
      }
    });

    // Search for a monster
    router.get('/search', (req, res) => {
        const { term } =req.query;

        Mons.findOne({ where: { name: term } } )
        .then(monsters => {
            res.render('monster', monsters)
        })
        .catch(err => console.log(err))
    });

module.exports = router;