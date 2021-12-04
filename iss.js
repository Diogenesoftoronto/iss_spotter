// We'll be making API requests to three different services to solve this problem.

//     Fetch our IP Address
//     Fetch the geo coordinates (Latitude & Longitude) for our IP
//     Fetch the next ISS flyovers for our geo coordinates

// Each later step is dependent on data from the previous one. 


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// DEPENDENCIES
const got = require('got');
const sensitive = require('/home/dio/lighthouse/w2/d4-api/iss_spotter/sensitive.js');
myIp = 'https://api.ipify.org?format=json'
let response = {
    IP: '',
    latitude: '',
    longitude: '',
    iss_pass: []
}
 const fetchISS = async (done) => {
    //  create promise alls using map to create an array of all the promise objects that have to be fulfilled at once.
    try {
        const body = await got(myIp).json();

        response.IP = body.ip;

        const geo = await got(`https://api.freegeoip.app/json/?apikey=${sensitive.key}`).json();

        response.latitude = geo.latitude;
        response.longitude = geo.longitude;

        const iss = await got(`http://api.open-notify.org/iss-pass.json?lat=${response.latitude}&lon=${response.longitude}`).json();

        response.iss_pass = iss.request.passes;
        done(null, response);
    }
    catch (error) {
        done(error, null);
    }
}


module.exports =  fetchISS ;
