function masodfokuTeszt(){
    const esetLista= [
        {
            a: 12,
            b: 5,
            c:2,
            vart: "nincs valós megoldás",
            szoveg: "nincs valós megoldása"
        },
        {
            a: 3,
            b: 5,
            c: 2,
            vart: "x1: 0.66, x2: 1",
            szoveg: "két valós megoldás van"
        },
        {
            a: 1,
            b: -3,
            c: 2,
            vart: "x1: 2, x2: 1",
            szoveg: " két valós megoldása van"
        },
        {
            a: 1,
            b: 2,
            c: 1,
            vart: "x1: 1, x2: nincs",
            szoveg: " egy valós megoldása van"
        },
    ]

    for (let index = 0; index < esetLista.length; index++) {
        let eredmeny = masodfoku(esetLista[index].a, esetLista[index].b, esetLista[index].c);
        console.assert(
            eredmeny.x1 == esetLista[index].vart.x1 &&
            eredmeny.x2 == esetLista[index].vart.x2,
            `Hiba: ${esetLista[index].szoveg}`
        );
    }
    console.log("Minden teszt lefutott")
}
masodfokuTeszt();