function theBeatlesPlay(musicians, instruments){
  var empty = new Array();

  for (var i = 0 ; i < musicians.length; i++){
    empty[i] = `${musicians} plays ${instruments}`
  }
  return empty;
}
