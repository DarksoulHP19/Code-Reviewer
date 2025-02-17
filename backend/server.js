require('dotenv').config();
const app = require('./src/app');



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});