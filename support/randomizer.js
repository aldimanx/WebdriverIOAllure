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
}

module.exports = new Randomizer()