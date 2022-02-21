function addNumbers(a:number, b:number){
    return a+b;
}

export default addNumbers;

export function AddString(str1:string, str2: string): string{
    return str1+str2;
}

export const format =(str1:string, params: number | string): string =>{
    return `${str1} ${params}`
}

export function introduce(str1: string, ...names:string[]): string{
    return `${str1} ${names.join(" ")}`
}

export function getName(user: {first: string, last: string}): string{
    return `${user.first} ${user.last}`;
}