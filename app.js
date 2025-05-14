import express from 'express';
import firebaseConfig from './firebase_config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    }
);

app.get('/firebase', (req, res) => {
    res.json(firebaseConfig);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}   
);

