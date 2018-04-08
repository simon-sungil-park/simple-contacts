const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use('/api/contact', require('./routes/ContactRoutes'));
app.use('/api/image', require('./routes/ImageRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})

