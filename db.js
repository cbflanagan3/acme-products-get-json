const fs = require('fs');


const readJSON = (file)=> {
  return new Promise((resolve, reject)=> {
    fs.readFile(file, (err, data)=> {
      if(data){
        try {
            console.log(resolve(JSON.parse(data.toString())))
          resolve(JSON.parse(data.toString()));
        }
        catch(ex){
            console.log(ex);
          reject(ex);
        }
      }
      else {
          console.log(err);
        reject(err);
      }
    });
  });
};

module.exports = {
  readJSON
};
