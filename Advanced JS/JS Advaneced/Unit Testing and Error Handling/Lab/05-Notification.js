function notify(message) {
    let notifyDiv = document.querySelector('#notification')
      notifyDiv.style.display='block'
      notifyDiv.textContent = message
      notifyDiv.addEventListener('click', onClick)
      function onClick(e) {
      
        e.target.style.display = 'none'
      }
     
    
  }
