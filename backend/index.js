const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));

app.use('/api/contact', require('./routes/ContactRoutes'));
app.use('/api/image', require('./routes/ImageRoutes'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})

