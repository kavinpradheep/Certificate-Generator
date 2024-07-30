const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/certificates', { useNewUrlParser: true, useUnifiedTopology: true });

const certificateSchema = new mongoose.Schema({
    name: String,
    event: String,
    dept: String,
    college: String,
    organizer: String
});

const Certificate = mongoose.model('Certificate', certificateSchema);

app.post('/api/certificates', async (req, res) => {
    const { name, event, dept, college, organizer } = req.body;

    const newCertificate = new Certificate({ name, event, dept, college, organizer });

    try {
        await newCertificate.save();
        res.status(201).send(newCertificate);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
