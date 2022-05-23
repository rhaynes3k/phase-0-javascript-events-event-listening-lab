const input = document.querySelector('input');

function addingEventListener(input) {
  input.addEventListener('click', function(event){
    console.log( 'Clicked' )
  });
}
