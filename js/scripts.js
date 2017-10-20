$('document').ready(function(){
  $('#suggesterForm').submit(function(event){
    event.preventDefault();
    var cSharpScore = 0;
    var javaScore = 0;
    var phpScore = 0;
    var rubyScore = 0;
    if ($('input[name="q1"]:checked').val() === 'frontend'){
      javaScore++;
      rubyScore++;
    } else {
      cSharpScore++;
      phpScore++;
    }
    if ($('input[name="q2"]:checked').val() === 'startup'){
      rubyScore++;
      phpScore++;
    } else {
      cSharpScore++;
      javaScore++;
    }
    if ($('input[name="q3"]:checked').val() === 'dynamic'){
      javaScore++;
      rubyScore++;
    } else {
      cSharpScore++;
      phpScore++;
    }

    console.log('c# ' + cSharpScore);
    console.log('java ' + javaScore);
    console.log('php ' + phpScore);
    console.log('ruby ' + rubyScore);

    var highestScore = 0;
    highestScore = Math.max(cSharpScore, javaScore, phpScore, rubyScore);
    var winnerArr = [];
    if (highestScore === cSharpScore) {
      winnerArr.push('C#')
    }
    if (highestScore === javaScore) {
      winnerArr.push('Java')
    }
    if (highestScore === phpScore) {
      winnerArr.push('PHP')
    }
    if (highestScore === rubyScore) {
      winnerArr.push('Ruby')
    }

    $('#resultsDiv').show();
    if (winnerArr.length > 1){
      $('#resultsDiv').text('You seem to like ' + winnerArr[0] + ' and ' + winnerArr[1] + 'the most. You should check those things out!');
    } else {
      $('#resultsDiv').text('Looks like your definitely a ' + winnerArr[0] + 'person. Sign up today!')
    }

  });
});
