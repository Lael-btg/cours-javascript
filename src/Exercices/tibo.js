const nombres = [0, 3, 4, 6, 18, 19, 4];
const moyenne = nombres.reduce(
    (accumulateur, nombreCourant) => accumulateur + nombreCourant,
    0
) / nombres.length;
console.log('la moyenne de tibo est de:', moyenne)


