// i use the get.elementid 
var myButton = document.getElementById('myButton');

// Adding an event listener for the 'click' event on the button object
myButton.addEventListener('click', function() {
    
    this.textContent = "Clicked!";
});
