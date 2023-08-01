class Randomizer {

    // getShipmentType() {
    //     const shipmentList = [
        
    //         'Jakarta','Bandung','Bogor','Bali','Depok','Banten','Cikarang'
    //     ];
        
    //     return shipmentList[this.makeNumberUnderMax(shipmentList.length)];
    //     } 
    makeNumberUnderMax(max){
        return Math.floor(Math.random() * max);
    }
      
    makeValueRange(min, max) {
    return Math.floor(Math.random() * max) + min;
    }

    makeJob(){
      const { faker } = require('@faker-js/faker');
      let randomJob = faker.person.jobTitle()
      return randomJob
  }
    makeName(){
      const { faker } = require('@faker-js/faker');
      let randomName = faker.person.fullName();
      return randomName
  }
}

module.exports = new Randomizer()