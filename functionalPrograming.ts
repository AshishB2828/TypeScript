export function prinToFile(text: string, callback: ()=>void): void{
    console.log(text);
    callback();
}

// OR
type MutationFunction = (v:number)=>number;
export function arrayMutate(numbers: number[], mutate: MutationFunction ): number[] {

    return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3],(v)=>v*10))

// functionn returning another function
type AdderFn = (v:number)=>number;
export function createAdder(num: number): AdderFn{
    return (v: number) => num+v;
}