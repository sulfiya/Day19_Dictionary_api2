function getDefinition() {
  var word = document.getElementById('word').value;
  var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var definitions = data[0].meanings;
      var definitionList = '';

      definitions.forEach(function(meaning) {
        meaning.definitions.forEach(function(def) {
          definitionList += '<li>' + def.definition + '</li>';
        });
      });

      document.getElementById('definition').innerHTML = '<ol>' + definitionList + '</ol>';
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}
