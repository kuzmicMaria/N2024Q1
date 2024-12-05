function digitize(n) {
    //code here
    return[...''+n].reverse().Map(Number)
    
  }
  console.log(digitize(12345))