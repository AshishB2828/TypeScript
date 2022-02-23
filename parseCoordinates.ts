interface Coordinate {
    x: number,
    y: number
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x:number, y:number): Coordinate;

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{

    let coord: Coordinate = {
        x: 0, y: 0
    };

    if(typeof arg1 === "object"){
        coord = {
            ...(arg1 as Coordinate)
        }
    }else{
        coord = {
            x: arg1 as number,
            y: arg1 as number
        }
    }

    return coord;
}


console.log(parseCoordinate({x:1,y:3}))
console.log(parseCoordinate(1, 5))




