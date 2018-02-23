module.exports = function check(str, bracketsConfig) {
  // begining of algorithm
  /*
  Adaptation of python algorithm
  http://interactivepython.org/courselib/static/pythonds/BasicDS/BalancedSymbols(AGeneralCase).html
  */
  var openers = new Array();
  var closers = new Array();
  var stack = new Array();

  for(var i = 0; i < bracketsConfig.length; i++){
    openers.push(bracketsConfig[i][0]);
    closers.push(bracketsConfig[i][1]);
  }

  var balanced = true;
  var index = 0;

  while(index < str.length && balanced){
      var symbol = str[index];
      if(openers.includes(symbol)){
          stack.push(symbol);
      } else {
          if(stack.length == 0)
              balanced = false;
          else {
              var top = stack.pop();
              var openIndex = openers.indexOf(top);
              var closeIndex = closers.indexOf(symbol);
              if (!(openIndex == closeIndex))
                  balanced = false;
          }
      }
      index++;
  }

  if(balanced && (stack.length == 0))
      return true;
  else
      return false;
}
