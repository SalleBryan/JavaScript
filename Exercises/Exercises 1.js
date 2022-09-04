function reverseNum(num) {
    return (
        parseFloat(
        num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math .sign(num)
    )
}
let num = 32243;