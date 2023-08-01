const axios = require('axios');
const { expect } = require('chai');
const randomizer = require('../../support/randomizer');

const web = "https://reqres.in/"
const page = randomizer.makeValueRange(1,2)
const name = randomizer.makeName()
const job = randomizer.makeJob()

describe('API Testing', () => {
    it('should fetch user data', async () => {
    // Make an API request using axios
    await axios.get(web+`api/users?page=${page}`).then((resp) => {

    // Log the response data
    console.log("respond test: ",resp.data.data)
    // Validate the response (you can keep the validations as before)
    const data = resp.data.data
    let length = data.length

    expect(resp.status).to.eq(200);
   for(let i = 0; i < length; i++){
        expect(data[i]).to.be.not.null
        expect(data[1]).to.have.property('id').and.to.be.a('number')
        expect(data[i]).to.have.property('email')
   }
         });
    })

    it('should perform a POST request', async () => {
        const postData = {
            name: name,
            job: job,
        };
        await axios.post(web+'api/users', postData).then(resp => {
            let data = resp.data
            console.log("hasilnya ini coy",name,job)

            expect(data.name).to.be.eq(name)
            expect(data.job).to.be.eq(job)
            expect(data.id).to.be.not.null
        })
    })



});

