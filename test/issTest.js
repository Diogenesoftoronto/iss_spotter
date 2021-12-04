
const chai = require('chai');
const expect = chai.expect;
const fetchISS = require('/home/dio/lighthouse/w2/d4-api/iss_spotter/iss.js');
let response = {
  IP: '',
  latitude: '',
  longitude: '',
  iss_pass: []
}
describe('#iss_pass', () => {
  it ('return an object with the correct properties', async () => {
    
    const result = fetchISS((err, res) => {
      response = res;
      console.log(res);

      return response;
      });
      
    await expect(response.IP).to.be.a('string');
    await expect(response.latitude).to.be.a('string');
    await expect(response.longitude).to.be.a('string');
    await expect(response.iss_pass).to.not.be.a.NaN;
  });
});
