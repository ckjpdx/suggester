$('document').ready(function(){

  var userName = prompt('Hello! We are on a first name basis here at Epicodus. What do your friends call you?');
  $('#userNameSpan').text(userName);

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
    if ($('input[name="q4"]:checked').val() === 'red'){
      rubyScore++;
      cSharpScore++;
    } else {
      javaScore++;
      phpScore++;
    }
    switch ($('input[name="q5"]:checked').val()){
      case 'cSharp':
        cSharpScore++;
        break;
      case 'java':
        javaScore++;
        break;
      case 'php':
        phpScore++;
        break;
      case 'ruby':
        rubyScore++;
        break;
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

    $('#signUpDiv').slideDown();
    $('#suggesterDiv').slideUp();
    $('#resultsDiv').show();
    if (winnerArr.length > 1){
      $('#resultsDiv').text('According to your responses, it looks like you\'d probably enjoy ' + winnerArr[0] + ' or ' + winnerArr[1] + '. Looks like you should check both of those things out, ' + userName);
    } else {
      $('#resultsDiv').text('According to your responses it looks like you\'re a ' + winnerArr[0] + ' person, ' + userName + '! We would suggest you look into this language as an option first.')
    }

  });
});
