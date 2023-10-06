// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

mimicServerCall()
  .then(() => {
    const hearts = document.querySelectorAll(".like-glyph");
    for (const el of hearts) {
      el.textContent = FULL_HEART;
      el.classList.add("activated-heart");
      el.addEventListener("click", (e) => {
        e.target.classList.remove("activated-heart");
        e.target.textContent = EMPTY_HEART;
      });
    }
  })
  .catch((err) => {
    const modal = (document.querySelector("#modal").textContent = err.message);
    document.querySelector("#modal-message").textContent = err.message;
    modal.parentNode.classList.remove("hidden");
    setTimeout(() => {
      modal.parentNode.classList.add("hidden");
    }, 3000);
  });




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
