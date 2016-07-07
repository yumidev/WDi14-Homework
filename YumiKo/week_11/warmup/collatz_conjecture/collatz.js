var conjecture = function ( number ) {
  for( var i = 1; i <= number; i++ ) {
    var j = i
    console.log("This time is for " + j);
    while ( j != 1 ) {
      if( j % 2 === 0 ) {
        j = j/2;
        console.log(j);
      } else if ( j % 2 !== 0 ) {
        j = 3 * j + 1;
        console.log(j);
      }
    }
    console.log(i + " can reach to number 1");
  }
}
