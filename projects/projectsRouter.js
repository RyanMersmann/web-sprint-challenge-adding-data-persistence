const express = require('express');
const Projects = require('./projects-model');
const router = express.Router();

// GET REQUESTS

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving projects.'});
        });
});

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving tasks.'});
        });
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error retrieving resources.'});
        });
});

// POST REQUESTS

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error creating a project.'})
        });
});

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error creating a task.'})
        });
});

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error creating a resource.'})
        });
});

module.exports = router;