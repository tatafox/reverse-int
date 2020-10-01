module.exports = function reverse (n) {
    if (n < 0) {
       n = n.toString().substr(1); 
    } else {
        n = n.toString(); 
    }
    return Number(n.split('').reverse().join(''));  
}
