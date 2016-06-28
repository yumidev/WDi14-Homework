var letSum = {
  s1: function (n) {
      // if (n%2===0){
      //   return 0;
      // }
      // else {
      //   return 1;
      // }
      return n%2===0 ? 0 : 1
      // grandi's series , string theory
  },
  s2: function(n) {
    // var sum = 0;
    // for(var j=1; j<=n; j++){
    //   sum += j
    // }
    // return sum;
    return (n+1)*n/2;
  }
}
