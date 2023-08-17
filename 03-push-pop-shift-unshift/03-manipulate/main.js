const log = console.log
const animals = ['Dog','Cat','Rat']
animals.push('Fish')
animals.unshift('Horse')
animals.push('Giraffe','Snake')
log(animals)
animals.shift()
animals.pop()
log(animals)
//[ 'Dog', 'Cat', 'Rat', 'Fish', 'Giraffe' ]