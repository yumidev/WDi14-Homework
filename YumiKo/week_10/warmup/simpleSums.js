var letSum = {
  s1: function (n) {
      if (n%2===0){
        return 0 || 1;
      }
      else {
        return 1;
      }
  },
  s2: function(n) {
    var sum = 0;
    for(var j=1; j<=n; j++){
      sum += j
    }
    return sum;
  }
}
