const arrayFruits = ['банан', 'яблоко', 'апельсин', 'груша', 'мандарин']
const Fruit = 'банан'
for (let x = 0; x <= arrayFruits.length - 1; x++) {
   if (arrayFruits[x] === Fruit) {
      console.log('в данном массиве есть ' + Fruit)
   } else {
      console.log(Fruit + ' нет')
   }
}