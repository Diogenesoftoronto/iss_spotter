const fetchISS = require('/home/dio/lighthouse/w2/d4-api/iss_spotter/iss.js');

fetchISS((err, data) => {
  if (err) {
      console.log(response)
      console.log(err);
      } else {
          console.log(data);
          }
});