const config = require("./config.json");

const ewelink = require("ewelink-api");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3100;

app.use(cors());

const connection = new ewelink(config);

app.get("/", (req, res) => {
	(async () => {
		const devices = await connection.getDevices();
		console.log(devices);
		res.send(devices);
	})();
});
app.post("/toggle/:deviceID", (req, res) => {
	connection.toggleDevice(req.params.deviceID).then(res.json);
});

app.listen(port, () => {
	console.log(`UWULINK backend listening at http://localhost:${port}`);
});
