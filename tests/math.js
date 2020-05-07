
const parser = require('../src/parse')

function TestAdd() {
    str = "1 + 2"
    result = parser.parse(str)
    console.log(result)
}

function TestDiv() {
    str = "4 / 2"
    result = parser.parse(str)
    console.log(result)
}


function TestMul() {
    str = "4 * 2"
    result = parser.parse(str)
    console.log(result)
}


TestAdd()
TestDiv()
TestMul()