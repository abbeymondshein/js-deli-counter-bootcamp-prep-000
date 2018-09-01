function takeANumber(line,name){
  line.push(name);
  var lineNumber = line.length;
  return `Welcome, ${name}. You are number ${lineNumber} in line.`
}

function nowServing(katzDeliLine){
  let i=0
  while (i<katzDeliLine.length){
  return  `Currently serving ${katzDeliLine[0]}.`;
  katzDeliLine.shift();
}
while (katzDeliLine.length===0){
  return "There is nobody waiting to be served!"
}
  
}