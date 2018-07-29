function telephoneCheck(str) {
  // Good luck!
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  //^ is start of string
  //(\s?)? checks for 0 or 1 of digit & whitespace
  //(\(\d{3}\)|\d{3}) checks for 3 digits or 3 digits in brackets
  //[\s\-]? checks for 0 or 1 space or hyphen
  //\d{3} checks 3 more digits
  //[\s\-]? checks 0 or 1 space/hyphen again
  //\d{4} checks final 4 digits
  //$is end of string
   return regex.test(str);
}

telephoneCheck("555-555-5555");