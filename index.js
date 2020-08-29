const express = require('express');

const projectsRouter = require('./projects/projectsRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter)
const PORT = 5000;

server.get('/', (req, res) => {
    res.json({message: 'Welcome to Starfleet'});
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));