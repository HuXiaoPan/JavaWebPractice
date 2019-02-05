var hw = "hello world!";
console.log(hw);

var num = 10;
console.log(typeof(num));

var i = 100;
while (i--) {
    console.log(i);
}
var result;
do {
    result = prompt("你到底爱不爱我？", "请输入（y/n）");
} while (result !== "y");