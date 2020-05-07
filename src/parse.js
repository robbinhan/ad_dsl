const add = require('./add')
const div = require('./div')
const mul = require('./mul')

var _ = require('lodash');

const keywords = ['/', '+', '-', '*']


function parse(str) {
    const stringArray = str.split(' ')
    console.log(stringArray)
    for (let index = 0; index < stringArray.length; index++) {
        const element = stringArray[index];
        switch (element) {
            case '+':
                return add(Math.trunc(stringArray[index - 1]), Math.trunc(stringArray[index + 1]))
            case '/':
                return div(Math.trunc(stringArray[index - 1]), Math.trunc(stringArray[index + 1]))
            case '*':
                return mul(Math.trunc(stringArray[index - 1]), Math.trunc(stringArray[index + 1]))
        }
    }
}

const parseExp = (str, ...values) => {
    const stringArray = str.split(' ')
    console.log(stringArray, values)

    const newArray = stringArray.slice()
    let lastSliceIndex = -1

    for (let vi = 0; vi < values.length; vi++) {
        const element = values[vi];
        if (_.isObject(element)) {
            for (let si = 0; si < stringArray.length; si++) {
                const strExp = stringArray[si];
                if (_.has(element, strExp)) {
                    const v = element[strExp]
                    newArray[si] = v
                }
            }
            console.log(newArray)
            return parse(newArray.join(' '))
        } else if (_.isArray(element)) {

        } else if (_.isNumber(element)) {
            const findValueIndex = stringArray.findIndex((e, i) => _.isString(e) && !keywords.includes(e) && i !== lastSliceIndex)
            // console.log(findValueIndex)
            lastSliceIndex = findValueIndex
            newArray[findValueIndex] = element
        }
    }
    console.log(newArray)
    return parse(newArray.join(' '))
}

module.exports.parse = parse
module.exports.parseExp = parseExp
