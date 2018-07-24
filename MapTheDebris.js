function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = Math.PI;
  let newArr = []
  for(let i = 0; i<arr.length; i++) {
    console.log(arr[i].avgAlt);
    let a = arr[i].avgAlt + earthRadius;
    let orbital = (Math.round((2 * pi) * Math.sqrt(Math.pow(a, 3) / GM)))
    let tempObj = {name: arr[i].name, orbitalPeriod: orbital}
    newArr.push(tempObj);
  }
  return newArr;
}
//very confusing :-)
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);