console.log("hello world");
const yourName = document.querySelector("#yourName")
const message = document.querySelector("#message")


function handleSubmit(evt) {
    evt.preventDefault();

    alert("your comment has been submited");
    yourName.value = ""
    message.value = ""

}
const catImage = document.querySelector("#cat")

function catCompliment(evt) {
    evt.preventDefault();

    alert("you have good taste in Images!!!!!!")
}
catImage.addEventListener("mouseover", catCompliment)


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);