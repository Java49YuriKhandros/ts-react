const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLeetters: number  = zCodeAscii - aCodeAscii + 1;

function shiftCipher (str:string, shift: number = 1): string {
    return cipherDecipher (str, shift, mapperCipher);
}

function shiftDecipher (str:string, shift: number = 1): string {
    return cipherDecipher (str, shift, mapperDecipher);
}
function cipherDecipher (str:string, shift: number, maperFun: (symb: string, shift:number) => string): string {
    const arStr: Array<string> = Array.from(str);
    const arRes: Array<string> = arStr.map(symb => {
        let res:string = symb;
        if (symb <= "z" && symb >= "a"){
            res = maperFun(symb, shift);
        }
        return res;
    })
    return arRes.join("");
}

function mapperCipher(symb:string, shift: number): string {
    const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLeetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}

function  mapperDecipher(symb:string, shift: number): string {
    const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLeetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
function testCipherDecipher (data: Array<{str:string, shift?: number}>, testName: string): void {
    const funForTest: (str: string, shift?: number) => string
    = testName === "cipherTest" ? shiftCipher : shiftDecipher;
    data.forEach(obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`))
}
const dataForCipherTest: Array<{str: string, shift?: number}> = [
    {str: "abc"}, {str: "abz", shift: 1000}
];
testCipherDecipher(dataForCipherTest, "cipherTest");