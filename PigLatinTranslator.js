function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/i)) {
    return str + "way";
    //^^vowel check^^//
  }else {
    let newStr =str.split(/(?![b-df-hj-np-tv-z])/i) //split input string by group of consonants
    let first = newStr[0];
    //get first instance of one of more consonants
    let rest = newStr.splice(1).join("");
    //put rest of string back together
    let translated = rest + first + "ay";
    //add first to end, then Fonzy it 
    return translated;
  }
}
