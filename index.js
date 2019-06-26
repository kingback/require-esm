module.exports = function req(esm, merge) {
  var d = 'default';
  var u = 'undefined';
  var e = '__esModule';
  if (
    esm && 
    esm[e] && 
    typeof esm[d] !== u
  ) {
    if (merge) {
      for (var k in esm) {
        k !== d && 
        k !== e && 
        (esm[d][k] = esm[k]);
      }
    }
    return esm[d];
  }
  return esm;
}