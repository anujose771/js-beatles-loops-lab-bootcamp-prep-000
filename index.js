function theBeatlesPlay(musicians, instruments){
  var empty = new Array();

  for (var i = 0 ; i < musicians.length; i++){
    empty[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i< facts.length){
    facts[i] = facts[i]+ "!!!"
    i++;
  }
  return facts;
}