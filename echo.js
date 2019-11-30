const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false, limit: '10000mb'}));
app.use(bodyParser.json({limit: '10000mb'}));
app.use(cors());


app.post('/echo', (req, res) => {
	let body = {
		body: req.body,
		headers: req.headers
		}
	
	var currentDate = new Date();
	console.log(currentDate);
	console.log('Request: ' + JSON.stringify(req.body, null, 4));
	
	console.log('Response: ' + JSON.stringify(body, null, 4));
	res.json(body)
});

app.post('/trueecho', (req, res) => {
	var currentDate = new Date();
	console.log(currentDate);
	console.log('Response: ' + JSON.stringify(req.body, null, 4));
	res.json(req.body)
});

app.listen(port, () => console.log(`App listening on port ${port}!`))