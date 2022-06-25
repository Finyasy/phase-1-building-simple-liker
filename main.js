// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartChange = {
  '♡': FULL_HEART,
  '♥': EMPTY_HEART
}

// Your JavaScript code goes here!
function userAction(){
  let likes = document.getElementsByClassName('like-glyph');
  console.log(likes);
  for(const like of likes){
    like.addEventListener('click',(e) => {
      mimicServerCall()
      .then(()=> e.target.textContent = heartChange[e.target.textContent])
      .catch(error => {
        let modal = document.getElementById('modal')
        modal.classList.remove('hiden')
        modal.querySelector('h2').textContent = error
        setTimeout(function(){
          modal.classList.add('hidden')
        },3000)
    })
  })
  }
}

userAction()



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
