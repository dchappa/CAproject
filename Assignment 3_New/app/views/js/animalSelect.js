var text = document.createElement('div');
text.id = "text"
document.getElementsByTagName('div')[0].appendChild(text);

window.onload=function() { // when the page has loaded
  document.getElementById("animalList").onchange=function() {
      document.getElementById("text").innerHTML = this.description
  }
}