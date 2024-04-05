
var MinStack = function () {
    this.stack = [];
    this.lowestObj = {
        index: 0,
        previousIndexes: []
    };
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (val <= this.stack[this.lowestObj.index]) {
        this.lowestObj.previousIndexes.push(this.lowestObj.index);
        this.lowestObj.index = this.stack.length - 1; // last element
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    if (this.stack[this.lowestObj.index] == undefined) {        
        this.lowestObj.index = this.lowestObj.previousIndexes.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.lowestObj.index]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


var minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);

console.log("Lowest Value ", minStack.getMin()); // return 0
minStack.pop();
console.log("Lowest Value ", minStack.getMin()); // return 0
minStack.pop();
console.log("Lowest Value ", minStack.getMin()); // return 0
minStack.pop();
console.log("Lowest Value ", minStack.getMin()); // return 2

console.log(minStack.stack)