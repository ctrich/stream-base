const express = require('express');


const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Aemilia'},
        {id: 3, name: 'Nuelle'}
    ];

    res.json(customers);

   
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});