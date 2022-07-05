// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
     // CHANGE: Pass data into callback instead of returning it directly
    if (!error) done(data);
    // if cant find the file/breed, pass undefined into the callback.
    if (error) done(undefined);
  });
};

module.exports = breedDetailsFromFile;