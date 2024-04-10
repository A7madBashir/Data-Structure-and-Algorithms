
var TimeMap = function () {
    this.state = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.state[key]) {
        this.state[key] = []
    }
    this.state[key].push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.state[key]) {
        return "";
    }

    let values = this.state[key];
    if (values[0][1] > timestamp) // first time is bigger than the time stamp
        return "";

    let l = 0, r = values.length - 1, tV = "";

    while (l <= r) {
        let m = parseInt(l + (r - l) / 2);

        if (values[m][1] == timestamp) {
            return values[m][0]
        }
        else if (values[m][1] < timestamp) {
            tV = values[m][0]
            l = m + 1;
        }
        else {
            r = m - 1
        }
    }
    return tV;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var obj = new TimeMap()
obj.set("foo", "bar", 1)
var param_2 = obj.get("foo", 1)
console.log(param_2)
var param_3 = obj.get("foo", 3)
console.log(param_3)
obj.set("foo", "bar2", 4)
obj.set("foo", "bar2", 5)
var param_4 = obj.get("foo", 4)
console.log(param_4)
var param_5 = obj.get("foo", 5)
console.log(param_5)
