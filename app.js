const images = [
    './images/sunrise.jpg',
    './images/morning.jpg',
    './images/sunset.jpg',
    './images/night.jpg'
];

let loadedImages = 0;
const totalImages = images.length;

function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                document.querySelector('.loader').classList.add('hidden');
                document.querySelector('.hero-section').classList.remove('hidden');
            }
        };
    });
}


let displayTime = document.querySelector(".todo-section h1");
let bgImage = document.querySelector(".hero-section");
let displayDay = document.querySelector(".todo-section h3");
let addButton = document.querySelector(".todo-button");
let inputField = document.getElementById("inputField");
let todoContainer = document.querySelector(".todo-list-container")

// Addingand Deleting Tasks
addButton.addEventListener("click", () => {
    
    // ADD
    let todo = document.createElement("li");
    todo.innerText = inputField.value;
    todoContainer.appendChild(todo);
    // Line-Through
    todo.addEventListener("click", () => {
        todo.style.textDecoration = "line-through";
    })
    //Delete
    todo.addEventListener("dblclick", () => {
        todoContainer.removeChild(todo);
    })

    // clear input field
    inputField.value = "";
})

// Displaying Time and Day
const clock = () => {
    let time = new Date();
    let hours = checkTime(time.getHours());
    let minutes = checkTime(time.getMinutes());
    let seconds = checkTime(time.getSeconds());

    let arrayOfWeekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNEDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    let weekdayNumber = time.getDay()
    let weekdayName = arrayOfWeekdays[weekdayNumber]

    displayDay.innerText = weekdayName;
    let currentTime = hours >= 12 ? `${hours} : ${minutes} PM` : `${hours} : ${minutes} AM`;
    displayTime.innerText = currentTime;

    if (hours >= 04 && hours <= 06) {
        bgImage.style.backgroundImage = "url('./images/sunrise.jpg')";
    }
    else if (hours >= 07 && hours <= 15) {
        bgImage.style.backgroundImage = "url('./images/morning.jpg')";
    }
    else if (hours >= 16 && hours <= 18) {
        bgImage.style.backgroundImage = "url('./images/sunset.jpg')";
    }
    else {
        bgImage.style.backgroundImage = "url('./images/night.jpg')";
    }
}

const checkTime = (t) => {
    return (t < 10 ? `0${t}` : t);
}


setInterval(clock, 1000);

window.onload = () => {
    preloadImages();
    clock();
    setInterval(clock, 1000);
};