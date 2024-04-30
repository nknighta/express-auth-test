import express from 'express';
import cors from "cors";
import * as fs from "fs";

const app = express();
const PORT = 12001;


app.use(cors());
//app.use('/public',express.static('../public/'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(`
      Hello World!
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/images/:filename', function(req, res) {
  let options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
});