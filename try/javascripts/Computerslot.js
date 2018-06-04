var Reel = /** @class */ (function () {
    function Reel() {
        this.list = new Array(6);
    }
    return Reel;
}());
var Cherry = new Symbol();
Cherry.SetImage("public/images/cherry.png");
Cherry.SetValue(2);
list[0] = Cherry;
var Symbol = /** @class */ (function () {
    function Symbol() {
    }
    // the getter and setter methods
    Symbol.prototype.setImage = function (imagepath) {
        this.imagepath = imagepath;
    };
    Symbol.prototype.GetImage = function () {
        return this.imagepath;
    };
    Symbol.prototype.SetValue = function (v) {
        this.value = v;
    };
    Symbol.prototype.GetValue = function () {
        return this.value;
    };
    // the default constructor to set the values
    Symbol.prototype.Symbol = function (path, v) {
        this.imagepath = path;
        this.value = v;
    };
    // this is the comparator that checks the wins and losses
    Symbol.winStatus = function (num, num1, num2) {
        if (num == num1) {
            return "Won";
        }
        else if (num1 == num2) {
            return "Won";
        }
        else if (num == num2) {
            return "Won";
        }
        else {
            return "lose";
        }
    };
    return Symbol;
}());
