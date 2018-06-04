
class Reel{
    list:Symbol[] = new Array(6);

    let  Cherry:Symbol = new Symbol();
    Cherry.SetImage("public/images/cherry.png");
    Cherry.SetValue(2);

   list[0]=Cherry;

}

interface Isymbol{

 setImage(imagepath:string)

   GetImage():string

    SetValue(v:number);

   GetValue():number;
}
class Symbol implements Isymbol{
    imagepath:string;
    value:number;
// the getter and setter methods
    setImage(imagepath:string) {
        this.imagepath= imagepath;
    }

    GetImage(): string {
        return this.imagepath
    }

    SetValue(v: number) {
        this.value=v;
    }

    GetValue(): number {
        return this.value;
    }

    // the default constructor to set the values
     Symbol( path:string, v:number) {
    this.imagepath = path;
    this.value = v;
}

// this is the comparator that checks the wins and losses
 static  winStatus(num:number,  num1:number, num2:number):string {

    if (num == num1) {
        return "Won";
    } else if (num1 == num2) {
        return "Won";
    } else if (num == num2) {
        return "Won";
    } else {
        return "lose";
    }
}
/*function spin(){

    }*/




}
