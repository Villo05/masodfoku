export function masodfoku(a, b, c){
    const diszkriminans = b *b - 4 * a * c;

    if (diszkriminans > 0){
        const x1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
        const x2 = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);
        return { x1: x1,
                 x2: x2
        };
    }else if (diszkriminans === 0){
        const x = -b / (2 * a);
        return { x1: x,
                 x2: x
        };
    }else {
        return { x1: "nincs valós megoldás",
                 x2: "nincs valós megoldás"
        };
    }
}