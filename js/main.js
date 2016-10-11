//
//
// var pageloaded = function (){
//   console.log("Pàgina cargada");
//
// };
//
//
// document.addEventListener("DOMContentLoaded",function(){
//   var list_li = document.querySelectorAll(".list_item");
//   list_li = Array.from(list_li);
//   console.log("Primer for each");
//   list_li.forEach(function(element_li,index,array){
//
//     console.log(element_li);
//     console.log(array.pop());
//
//
//   });
//   console.log("Segundo for each");
//
//   for (var li in list_li){
//     li.addEventListener("click", function(){});
//   }
//
//   list_li.forEach(function(element_li,index,array){
//
//     element_li.addEventListener("click",function(){
//
//     });
//
//   });
//
//
//
//
//
//
//
// });





//
// document.addEventListener("DOMContentLoaded",function(){
//   var hash={
//     key:"value",
//     key1:"value",
//     key2:"value",
//     key3:"value",
//     key4:"value",
//     key5:"value",
//     key6:"value",
//     key7:"value",
//     key8:"value",
//   };
//
//
//
//   var array = [];
//   for (var key in hash){
//     array.push(key+":"+hash[key]);
//   }
//
//   console.log("-->"+array.reverse());

// });


//console.log(hash);

var array = [1,2,3,4,5,6,7,8,9,0];

var res = array.some(function(number,index){
  return number<10;
});
console.log(res);

//array.every
















console.log("JS File cargado");
