import express from "express";

const app = express();

const posts = [
    {
        titolo: "Introduzione a Node.js",
        contenuto: "Node.js consente di eseguire JavaScript lato server. In questo articolo vedremo come configurare il nostro primo server web usando il modulo nativo HTTP.",
        immagine: "/images/intro-node.jpg",
        tags: ["NodeJS", "JavaScript", "Backend"]
    },
    {
        titolo: "Alla scoperta di Express.js",
        contenuto: "Express è il framework minimalista più famoso per Node.js. Semplifica la gestione delle rotte, dei middleware e la configurazione degli asset statici.",
        immagine: "/images/express-framework.jpg",
        tags: ["Express", "Backend", "WebDev"]
    },
    {
        titolo: "Come funzionano i Middleware",
        contenuto: "I middleware sono il cuore pulsante di Express. Intercettano la richiesta prima che arrivi alla rotta finale, permettendo di fare controlli, log o manipolazioni dei dati.",
        immagine: "/images/middleware-guide.jpg",
        tags: ["Express", "Architecture", "Learning"]
    },
    {
        titolo: "Guida pratica a Postman",
        contenuto: "Postman è uno strumento indispensabile per testare le API. Vedremo come inviare richieste GET, POST, PUT e DELETE senza bisogno di un'interfaccia frontend.",
        immagine: "/images/postman-tutorial.jpg",
        tags: ["API", "Testing", "Tools"]
    },
    {
        titolo: "Gestire gli Asset Statici",
        contenuto: "Immagini, file CSS e script client-side hanno bisogno di essere serviti correttamente. Scopriamo come usare express.static per rendere accessibile la cartella public.",
        immagine: "/images/static-assets.jpg",
        tags: ["Express", "Frontend", "StaticFiles"]
    }
];

app.get('/', (request, response) => {
    response.json();
});

app.listen(6969, (error) => {
    if (error) {
        console.log('Errore dal server');
    } else {
        console.log('Server in ascolto. Wela');
    }
});

