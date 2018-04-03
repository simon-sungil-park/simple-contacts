const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/api/test', (req, res) => {
  res.json({isOk: true});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})

