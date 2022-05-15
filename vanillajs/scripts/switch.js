/*
const foo = 'Salak'
let nameBuah = ''
switch (foo) {
    case 'Papayas':
        nameBuah = 'Papaya'
        break
    case 'Salak':
        nameBuah = 'Salak'
        break

    default:
        nameBuah = 'Semangka'
        break
}

console.log(nameBuah)
*/

const nomor = 1
function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return 'Salak'
        case 2:
            return 'Apel'
        case 3:
            return 'Jeruk'
        case 4:
            return 'Durian'  

        default:
            return 'Semangka'
    }
}

console.log(pilihBuah())