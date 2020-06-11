const express = require('express');
const path = require('path');
const fs = require('fs');


const readJSON = (file)=> {
  return new Promise((resolve, reject)=> {
    fs.readFile(file, (err, data)=> {
      if(data){
        try {
          resolve(JSON.parse(data.toString())).then(data => data);
        }
        catch(ex){
          reject(ex);
        }
      }
      else {
        reject(err);
      }
    });
  });
};

const PORT = 3000;

const app = express()
const products = './products.json';
const companies = './companies.json';
let prodData = '';
console.log(prodData);

// app.use(express.static(path.join(__dirname, '../acme-products-get-json')))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', (req, res) => {
    readJSON(products).then(data => res.send(data));
}) 

app.get('/api/companies', (req, res) => {
    readJSON(companies).then(data => res.send(data));
}) 

app.listen(PORT, () => {console.log(`server is listening on PORT:${PORT}`)});
