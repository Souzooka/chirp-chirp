function chirp(n){
  if (n === 0) {
    return "";
  }
  --n;
  return chirp(n) + "chirp ";
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});