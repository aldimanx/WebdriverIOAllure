class moladin {

    get btnBuy(){
        return $('//a[@class="btn buy"]')
    }

    get txtCart(){
        return $('//span[text()="Shopping Cart  "]')
    }

    get iptQuantity(){
        return $('//input[@type="number"]')
    }
    get iptName(){
        return $('(//input[@type="text"])[1]')
    }

    get btnChecokout(){
        return $('//div[@class="cart-checkout"]')
    }
    

}

module.exports = new moladin