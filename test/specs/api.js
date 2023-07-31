const axios = require('axios');
const { expect } = require('chai');
const randomizer = require('../../support/randomizer');

const web = "https://reqres.in/"
const page = randomizer.makeValueRange(1,2)

describe('API Testing', () => {
  it('should fetch user data', async () => {
    // Make an API request using axios
    await axios.get(web+`api/users?page=${page}`).then((resp) => {

    // Log the response data
     //   console.log("responysatasnfanf: ",resp.data)
    // Validate the response (you can keep the validations as before)
    const data = resp.data.data
    let length = data.length

    expect(resp.status).to.eq(200);
   for(let i = 0; i < length; i++){
        expect(data[i]).to.be.not.null
        expect(data[1]).to.have.property('id').and.to.be.a('number')
        expect(data[i]).to.have.property('email')
   }
    // Add more validations as needed
  });
})

});

