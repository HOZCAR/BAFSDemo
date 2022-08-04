// @ts-check
//class for utilities, contains a random string generator and a random int generator
exports.Utils = class Utils {
    constructor(){
        this.characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    generateString(length){
        let result = '';
        const charactersLength = this.characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    generateInt(max, min){
        return Math.floor(Math.random() * max) + min;
    }
}