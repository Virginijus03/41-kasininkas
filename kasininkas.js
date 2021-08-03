async function kasininkas(price, cash) {
    console.log(`Priimtos kiupiuros: ${cash.join(', ')}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let suma = 0;
            for (let i = 0; i < cash.length; i++) {
                suma += cash[i];
            }
            if (price === suma) {
                resolve(`"Aciu, jog pirkote!"`);
            }
            if (price > suma) {
                resolve(`"Nepakanka pinigu!"`)
            }
            if (price < suma) {
                resolve(`"Aciu, jog pirkote! Stai jusu graza - ${suma - price} pinigu!"`)
            }


        }, 2000);
    })
}

module.exports = kasininkas;