import { useEffect } from "react";

var p = 0;
var sum = "";
var val = "";
var dic = {};
function Cart()
{

    var list = [];
    var data = window.localStorage.getItem('cart2');
    console.log(data);
    console.log(typeof(data));
    console.log("list = ",list);
    console.log(list.length);
    
      if(data!==null)
      {
        for (var i = 0; i < data.length && data !== null; i++) {
          if (data[i] === '{') {
            p = i;
            while (data[p] !== "}") {

              for (var j = p + 1; j < data.length && data[j] !== ":"; j++) {
                if (data[j] !== '"') {
                  sum = sum + data[j];
                }
              }
              for (var r = j + 1; r < data.length && data[r] !== "," && data[r] !== "}"; r++) {
                if (data[r] !== '"') {
                  val = val + data[r];
                }
              }
              p = r;
              i = r + 1;
              dic[sum.toString()] = val;
              console.log("dic = ", dic, dic.name);
              sum = "";
              val = "";
            }
            list.push(dic);
            console.log(dic);
            dic = {};
          }
        }
      }
     return (
         <>
          <div>
            {list.length!==0?
            list.map((e)=>{
              return <div>
                <p>{e.name}</p>
                <p>{e.price}</p>
              </div>
            })
            :<p>Your Cart is Empty</p>}
          </div>
         </>
     );
}
export default Cart;