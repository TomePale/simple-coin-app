const express = require('express');
const axios = require('axios');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.set('port', process.env.PORT || 3000);

if(process.env.NODE_ENV === 'production') {
    app.use(history());
    app.use(express.static(path.join(__dirname, '/dist')));
}

app.get('/api/coins', (req, res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        params: {
            start: 1,
            limit: 100,
            convert: 'USD' 
        },
        headers: {
            'X-CMC_PRO_API_KEY': '58bf4e05-9eee-49e1-9900-dce0f4130d5b'
        }
    })
    .then((response) => {
        res.setHeader('Cache-Contorl', 'no-cache');
        res.json(response.data);
    })
    .catch((error) => console.log(error));
});

app.get('/api/market_data', (req, res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest' , {
        headers: {
            'X-CMC_PRO_API_KEY': '58bf4e05-9eee-49e1-9900-dce0f4130d5b'
        }
    })
    .then((response) => {
        res.setHeader('Cache-Contorl', 'no-cache');
        res.json(response.data);
    })
    .catch((error) => console.log(error));
});

app.listen(app.get('port'), () => {
    console.log('Server is running on http://localhost:' + app.get('port'));
});