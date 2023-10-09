/**
 * test with page objects
 */
const Moladin = require('../pageobjects/pagetesting')


let names = "aldytest"
let values = "50"

describe('happy flow', () => {

    before(() => {
        browser.url('https://demo.midtrans.com/')


    })

    it('buy now', async () => {

        await Moladin.btnBuy.click()
        await Moladin.iptQuantity.clearValue()
        await Moladin.iptQuantity.setValue(values)

        await Moladin.iptName.clearValue()
        await Moladin.iptName.setValue(names)

        await Moladin
    })
})

