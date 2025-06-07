const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// const port = 3000;
const port=process.env.PORT || 4000 

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received location: Latitude = ${latitude}, Longitude = ${longitude}`);
    res.status(200).send('Location received');
});

app.listen(port, () => {
    // console.log(`Server running at http://localhost:${port}`);
    console.log(`Example app listening on port ${port}`);
});
