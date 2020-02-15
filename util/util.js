function convertRange2Star(rank) {
  var n = Math.ceil(rank / 2);
  var ret = [0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    ret[i] = 1;
  }
  return ret;
}
module.exports= {
  convertRange2Star: convertRange2Star
}