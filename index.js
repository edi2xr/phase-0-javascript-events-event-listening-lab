function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

// Call the function to activate the listener when the script loads
addingEventListener();
