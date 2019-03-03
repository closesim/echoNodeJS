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
	
	console.log('Request: ' + JSON.stringify(req.body));
	console.log('Response: ' + JSON.stringify(body));
	res.json(body)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))