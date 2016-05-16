//values < 4,000,000
//sum together the even numbers only

var x = 1;
var y = 2;
var z = 0;
var even = 2;
while (z < 4000000){
  if (x + y < 4000000){
    z = x + y;
    x = y;
    y = z;
    console.log("z: ", z);
    if (z%2==0){
      even += z;
      console.log("even: ", even);
    }
  }
}
