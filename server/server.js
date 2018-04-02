const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// console.log(__dirname + '\\..\\public');
// console.log(publicPath);