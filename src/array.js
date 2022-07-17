const a = [1, 2, 3, 4, 5, '5', 'Ash'];


Array.prototype.listTypes = function () {
    let types = [];
    this.map(item => {
        const type = typeof item;
        if (!types.includes(type)) {
            types.push(type);
        }
    });
    return types;
}

Array.prototype.unique = function () {
    return Array.from(new Set(this));
}

Array.prototype.convertString = function () {
    return this.map(_ => _.toString());
}

Array.prototype.convertNumber = function () {
    return this.map(num => Number(num));
}

Array.prototype.onlyNumber = function () {
    return this.filter(num => Number.isFinite(num));
}

Array.prototype.onlyString = function () {
    return this.filter(str => typeof str === 'string');
}

Array.prototype.add = function (value) {
    return this.convertNumber().onlyNumber().map(num => num + value);
}

Array.prototype.plus = function (value) {
    return this.map(num => num + value);
}

Array.prototype.subtract = function (value) {
    return this.convertNumber().onlyNumber().map(num => num - value);
}

Array.prototype.multiple = function (value) {
    return this.convertNumber().onlyNumber().map(num => num * value);
}

Array.prototype.division = function (value) {
    return this.convertNumber().onlyNumber().map(num => num / value);
}

Array.prototype.count = function (item) {
    const counts = {};
    this.filter(_ => !(_ instanceof Object)).map(item => {
        if (counts[item]) counts[item]++;
        else counts[item] = 1;
    })
    return counts;
}

Array.range = function (start, end, step = 1) {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}


console.log(a.listTypes());
console.log(a.unique());
console.log(a.convertString())
console.log(a.convertNumber().onlyNumber())
console.log(a.onlyString())
console.log(Array.range(1, 5, 3))
console.log(a.add(4))
console.log(a.plus(4))
console.log(a.subtract(4))
console.log(a.multiple(4))
console.log(a.division(4))