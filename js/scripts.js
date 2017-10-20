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

  });
});
