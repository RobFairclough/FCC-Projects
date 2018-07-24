function stringToBinary(str) {
    let charcodes = str.split("").map(char=> char.charCodeAt()); //split string into chars, then map an array of the charcodes of each character
    return charCodes.map(code=> charCodeToBinary(code)).join(" "); //convert codes to binary, then join as a string
    
}

function charCodeToBinary(charCode) {
    let byte  = "00000000";
    let count = charCode;
    if (count > 255) {
        return "error";
    }
    for (let i = 128, j = 0; i >=1; i/2, j++) {
        if (count >= i) {
            byte[j] = 1
            count -= i;
        }
    }
    console.log(byte);
    return byte;   
}