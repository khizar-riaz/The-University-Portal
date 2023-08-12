const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT ?? 3000);

const server = http.createServer(app);

server.on('listening', () => {
    console.log('Listening on port:' + (process.env.PORT ?? 3000))
})

server.listen(process.env.PORT ?? 3000)