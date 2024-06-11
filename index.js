const express = require('express');
const checkoutUiRouter = require('./routes/checkout-ui.routes')

const app = express();

app.use(express.json());

app.use('/api', checkoutUiRouter)

app.get('/', (req, res) => {
    res.send('🦄🌈✨👋🌎🌍🌏✨🌈🦄');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
