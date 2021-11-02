const express = require('express');
const productRoutes = require('./routes/product');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/items', productRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001!");
});
