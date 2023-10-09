class MainPage{

    get frmSearch(){
        return $('#Tujuan')
    }
    lstKota(kota){
        return $(`(//strong[text()="${kota}"])[1]`)
    }
    get btnCari(){
        return $('//div[text()="Cari Hotel"]')
    }
    get title(){
        return $('p.navbar__title')
    }
}

module.exports = new MainPage()