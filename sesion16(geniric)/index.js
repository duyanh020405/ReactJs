"use strict";
// function duy(item:any):any{
//     return item
// }
// const duyAnh = duy("helooo")
// const duyAnh2 = duy(4) -------------Normal
function checked(first, second) {
    return [first, second];
}
const checking = checked(1, 2);
console.log(checking); // Output: [1, 2]
// extend //
function merge2(obj1, obj2) {
    console.log(obj1, obj2);
}
merge2("duy anh", 3); // Output: duy anh 3
// để đổi trạng thái từ type này sang type khác 
/*
num1 = "10" as unknown as number;
num1 đang number => 10 string
*/
