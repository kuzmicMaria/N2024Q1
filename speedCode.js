function arrayMadness(a, b) {
   // Ready, get set, GO!!!
   return a.reduce((acc,el)=> acc+el**2 ,0) > b.reduce((acc,el)=> acc+el**3 ,0)
}

console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]))
