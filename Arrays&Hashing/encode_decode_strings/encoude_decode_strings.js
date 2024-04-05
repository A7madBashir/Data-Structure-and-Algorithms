const crypto = require("crypto")

class Solution {
    #private_key;
    publicKey;
    constructor() {
        const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
            // The standard secure default length for RSA keys is 2048 bits
            modulusLength: 2048,
        });
        this.publicKey = publicKey;
        this.#private_key = privateKey
    }

    /**
     * @param {string[]} strs
     * @returns {string}
    */
    encode(strs) {
        if(strs.length <= 0 ) return [];

        let encrypted = crypto.publicEncrypt(
            {
                key: this.publicKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: "sha256",
            },
            Buffer.from(strs.join("~,~"))
        )

        return encrypted.toString("base64");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length <= 0) return [];

        const decryptedData = crypto.privateDecrypt(
            {
                key: this.#private_key,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: "sha256",
            },
            Buffer.from(str, "base64")
        );

        return decryptedData.toString().split("~,~");
    }
}

// Test Cases 

var sol = new Solution();
var elements = ["ahmad", "bashir", "ash"];

let encrypted = sol.encode(elements)

let encrypted1 = sol.encode(["HAHAH","MAKSA"])

let encrypted2 = sol.encode([])

let result = sol.decode(encrypted)
let result1 = sol.decode(encrypted1)
let result2 = sol.decode(encrypted2)
console.log("Final first result: ", result)
console.log("Final second result: ", result1)
console.log("Final third result: ", result2)