'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {

  console.log('guessing...');
  $('.game-start').hide();
  renderQuest();
  $('.quest').show();
}

function renderQuest() {
  $('.quest h2').text(gCurrQuest.txt);
  // $('.quest').find('h2').text(gCurrQuest.txt);
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  console.log('res', res);
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      // TODO: improve UX DONE
      $('.victory').show();
      setTimeout(function(){
        $('.victory').hide();
        $('.quest').hide();
        onRestartGame();    
      }, 2000)
    } else {
      // TODO: hide and show new-quest section DONE
      $('.new-quest').show();
      $('.quest').hide();
    }
  } else {
    // TODO: update the lastRes global var DONE
    gLastRes = res;
    moveToNextQuest(res);
    renderQuest();
  }
  console.log("gLastRes", gLastRes);
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  addGuess(newQuest, newGuess, gLastRes);

  //TODO @9:50
  $('#newGuess').val('');
  $('#newQuest').val('');
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  gLastRes = null;
  gCurrQuest = gQuestsTree;
  gPrevQuest = null;
}
