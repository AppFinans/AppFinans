var client = new XMLHttpRequest();
client.open('GET', '/lancamentos.txt');
client.onreadystatechange = function() {
  document.querySelector( "main" ).innerHTML = client.responseText;
}
client.send();