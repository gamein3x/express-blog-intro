import express from "express";

const app = express();

app.get('/', (request, response) => {
    response
        .type('html')
        .send('<h1>Hello world!</h1>')
});

app.listen(6969, (error) => {
    if (error) {
        console.log('Errore dal server');
    } else {
        console.log('Server in ascolto. Wela');
    }
});

