const R = require('ramda')
const myCurry = require('./curry')

const log = console.log
const square = n => n * n

log(R.map(square)([2, 5]))

const add = (x, y) => x + y
log(R.curry(add)(1)(2))
log(myCurry(add)(1)(2))
log(R.curry(add)(1, 2))
log(myCurry(add)(1, 2))

log(R.compose(Math.abs, R.add(1), R.multiply(2))(-4))
log(R.pipe(Math.abs, R.add(1), R.multiply(2))(-4))
