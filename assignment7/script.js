//Author: Ashby Utting, Molly Hennessy, Anthony Peruzzo and Emily Carey
//Modified by: Molly Hennessy
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

   var consoleDisplay = document.getElementById('consoleDisplay');

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

  consoleDisplay.innerHTML = "";

  if(child) {
    consoleDisplay.removeChild(child)
  }

  var donatePrompt = window.prompt("How much would you like to donate?")
  var child = document.createElement("H3");
  consoleDisplay.appendChild(child);

  if (donatePrompt < 100) {
    donation = document.CreateTextNode("Thank you for your donation of $ '+ money +'_'");
    child.appendChild(donation)
  } else {
    donation = document.CreateTextNode("Thank you for your very generous donation!");
    child.appendChild(donation);
    var change = document.getElementsByTagName("h3");
    change(0).style.color = 'red';

    var articleLoop = document.getElementsByTagName('article');
    for(var i = 0; i < articleLoop.length; i++) {
      articleLoop[i].className = 'generous-donation';
    }

  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[0].year === newest){
    consoleDisplay += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    consoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    consoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    consoleDisplay.innerHTML =+ 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[1].year === newest){
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    consoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    consoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[2].year === newest){
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.<br>';
  }
});