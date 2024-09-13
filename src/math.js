function add(x,y){
    return (x + y);
}

function subtract(x, y){
    return (x - y);
}

function multiply(x, y){
    return (x * y);
}

function divide(x, y){
    return(
        (y === 0 ? "Can not divide by 0" :((x * 1.0) / y ).toFixed(2) )
    )
}


export {add, subtract, multiply, divide}