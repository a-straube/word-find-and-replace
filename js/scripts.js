var findAndReplace = function(sentence, findWord, replacementWord) {
  var splitSentence = sentence.split(' ');
  var findWord = findWord;
  var replacementWord = replacementWord;

  for (var index = 0; index < splitSentence.length; index += 1) {
    if (splitSentence[index].replace(/\W+/g, "").toLowerCase() === findWord.toLowerCase()) {
      splitSentence[index] = replacementWord;
    };
  };

  return splitSentence.join(' ');
};

$(document).ready(function() {
  $("form#far").submit(function(event) {
    var sentence = $("input#sentence").val();
    var oldWord = $("input#oldword").val();
    var newWord = $("input#newword").val();
    var result = findAndReplace(sentence, oldWord, newWord);

    $(".result").text(result)

    $("#result").slideDown(300);

    event.preventDefault();
  });
});
