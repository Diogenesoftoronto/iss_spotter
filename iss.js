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
fetchRequestAPIs = ['https://api.ipify.org?format=json']
response = {}
 const fetchISS = async () => {
  await Promise.all( fetchRequestAPIs.map(async (fetchRequest) =>{
    
      const {body} = await got.post(fetchRequest, {
          json: {},
          responseType: 'json'
      });
  })).catch(err => {
      console.log(err);
      
  })  
      response = body.data;
      console.log(body.data);
      //=> '{"hello":"world"}'
};
module.exports = {response};
