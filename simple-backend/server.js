const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // You can choose any port. Just make sure it's not conflicting with other services.
var idRequestCounter = 0;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/equipment/id', (req, res) => {
    console.log("Received ID request nr.", ++idRequestCounter);
    res.json(someBusinessLayerService());
});

app.post('/api/equipment/update', (req, res) => {
    // Simulate updating the equipment state using the data from the client
    const requestBody = req.body;
    console.log("State request received: ", requestBody);

    res.json({ status: `State updated with: ${requestBody.newState} for equipment with ID: ${requestBody.id} and data entry stored in DB`});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function someBusinessLayerService(){
    return {id: idRequestCounter};
}
