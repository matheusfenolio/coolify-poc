import express from 'express';

const server = express();

server.get('', (req, res) => res.status(200).json('Hello Coolify!'));

server.listen(9100, () => console.info('Server is running!'));