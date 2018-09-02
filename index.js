function takeANumber(line,name){
  line.push(name);
  var lineNumber = line.length;
  return `Welcome, ${name}. You are number ${lineNumber} in line.`
}

//accepts current line of people, returns first person in line, removes that person from line
//if nobody is in line, state as such
function nowServing(katzDeliLine){
  let i=0
  while (i<katzDeliLine.length){
    i++;
}

if (katzDeliLine.length===0){
 return "There is nobody waiting to be served!"
}
else {
	return  `Currently serving ${katzDeliLine.shift()}.`;
}
}
