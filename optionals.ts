function printIngredient(quantity: string, intgredient: string, optional?:string){
    console.log(`${quantity} ${intgredient} ${optional? optional:""}`)
}


printIngredient("1Cup", "Flour");
printIngredient("1Cup", "Flour", "optional");

interface User {
    id: string;
    info?:{
        email?:string
    }
}

function getEmail(user: User) :string {

    if(user.info){
        return user.info.email!;
    }
    return "";
}
function getEmailEasy(user: User) :string {
    return user?.info?.email ?? "";
}
//optional callBacks
function addWithCallBack(x: number, y: number, callBack?:()=> void){
    console.log([x,y]);
    // if(callBack){
    //     callBack();
    // }
    // OR
    callBack?.();
}

