import { masodfoku } from "./fuggvenyek.js";

function masodfokuTeszt(){
    const esetLista= [
        {
            a: 12,
            b: 5,
            c:2,
            vart: {x1: "nincs valós megoldás", x2: "nincs valós megoldás"},
            szoveg: "nincs valós megoldása"
        },
        {
            a: 0,
            b: 2,
            c: -4,
            vart: {x1: 0, x2: "sok"},
            szoveg: "a = 0"
        },
        {
            a: 1,
            b: -3,
            c: 2,
            vart: {x1: 2, x2: 1},
            szoveg: "két valós megoldása van"
        },
        {
            a: 1,
            b: 2,
            c: 1,
            vart: {x1: 1, x2: "nincs"},
            szoveg: "egy valós megoldása van"
        },
        {
            a: 0,
            b: 0,
            c: 0,
            vart: {x1: 0, x2: "nincs"},
            szoveg: "mind 0"
        },
    ]

    esetLista.forEach((eset) => {
        let eredmeny = masodfoku(eset.a, eset.b, eset.c);
        console.assert(
                eredmeny.x1 == eset.vart.x1 &&
                eredmeny.x2 == eset.vart.x2,
                /*JSON.stringify(eredmeny) == JSON.stringify(eset.vart),*/
                 `${eset.szoveg}`
        );
    });
}
masodfokuTeszt();