export default function convertMoney(nominal: number):string {
    let angkaDalamString = `${nominal}`;
    let angkaDalamStringTerbalik = '';
    let rupiah = '';
    
    //angka dibalik
    while(angkaDalamString) {
        angkaDalamStringTerbalik = angkaDalamString.slice(0,1) + angkaDalamStringTerbalik
        angkaDalamString = angkaDalamString.slice(1)
    }

    //angka dikembalikan semula dengan tambahan '.' pada setiap kelipatan 3 digit
    let i = 1
    while(angkaDalamStringTerbalik) {
        rupiah = angkaDalamStringTerbalik.slice(0,1) + rupiah
        angkaDalamStringTerbalik = angkaDalamStringTerbalik.slice(1);

        if((i % 3 === 0) && (angkaDalamStringTerbalik)) {
            rupiah = '.' + rupiah;
        } 
        i++
    }

    return `Rp. ${rupiah},00-`;
}