
const parser = require('../src/parse')

function TestExp1() {
    console.log("TestExp1-----------")
    str = "click / pv"

    valueMap = { "click": 54, "pv": 200 }

    result = parser.parseExp(str, valueMap)
    console.log(result)
}

function TestExp2() {
    console.log("TestExp2-----------")
    str = "click / pv"
    result = parser.parseExp(str, 54, 200)
    console.log(result)
}

TestExp1()
TestExp2()