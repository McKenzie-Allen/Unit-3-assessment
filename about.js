console.log("hello world");
const yourName = document.querySelector("#yourName")
const message = document.querySelector("#message")


function handleSubmit(evt) {
    evt.preventDefault();

    alert("your comment has been submited");
    yourName.value = ""
    message.value = ""

}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);