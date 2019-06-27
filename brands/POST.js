const qs = require('querystring');
const fs = require('fs');
const b = require('../inventories/brands_inventory.json');

function POST(req, res) {
    let d = '';
    req
    .on('data', c => d += c)
    .on('end', () => {
        d = qs.parse(d);
        d = {
            id: b.length,
            brand: d.brand,
            description: d.description
        };
        b.push(d);
        fs.writeFile('./inventories/brands_inventory.json', JSON.stringify(b), e => {if(e) throw new Error(e)});
        res.end(JSON.stringify({
            data: b
        }));
    });
}

module.exports = POST;