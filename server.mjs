import express from 'express';

const server = express();

server.get('', (req, res) => res.status(200).json('Hello World!'));

server.listen(9100, () => console.info('Server is running!'));