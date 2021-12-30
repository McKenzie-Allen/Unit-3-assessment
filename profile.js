const color = document.querySelector("#color");
const place = document.querySelector("#place");
const ritual = document.querySelector("#ritual");
const background = document.querySelector(".profile");
const placeImg = document.querySelector("#placeImg")
const delayInMilliseconds = 3000;
const placeArr = ["Lake Powell", "Hawaii", "San Rafeal Swell", "Blue Lake"]

function colorButton() {
    background.style.backgroundColor = "rgb(0, 79, 124)";
    alert("my Favorite Color is Blue");

    setTimeout(function() {
        background.style.backgroundColor = ""
    }, delayInMilliseconds);
};

function placeButton() {
    const random = Math.floor(Math.random() * placeArr.length);
    alert(`one of my favorite places is ${placeArr[random]}`);
    placeImg.style.display = "inline"
    switch (placeArr[random]) {
        case "Hawaii":
            placeImg.src = "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201230100452-10-2021-travel-destinations-hawaii.jpg"
            break;
        case "Lake Powell":
            placeImg.src = "https://www.nps.gov/common/uploads/grid_builder/glca/crop16_9/84C871F3-1DD8-B71B-0BCAD116B65E0D38.jpg?width=950&quality=90&mode=crop"
            break;
        case "Blue Lake":
            placeImg.src = "https://sites.google.com/a/bluefrontierdiversinc.com/bluefrontierdiversinc/_/rsrc/1421725150476/scuba-travel-1/local-scuba-sites/blue-lake/scuba%20Blue%20Lake%20dock.JPG?height=300&width=400"
            break;
        case "San Rafeal Swell":
            placeImg.src = "https://scenicusa.net/images/DC06SanRafDesertPD.jpg"
            break;
        default:
            placeImg.style.display = "none"
    }
};

function ritualButton() {
    alert("My favorite thing to do is Scuba Diving");
    const bubble = new Audio("bubbles.wav");
    bubble.play();
    bubble.currentTime = 0;
}

color.addEventListener("click", colorButton)
place.addEventListener("click", placeButton)
ritual.addEventListener("click", ritualButton)