let bar = document.getElementById("progress-bar");
let steps = document.querySelectorAll(".stage");
let firstPage = document.querySelector(".first-page");
let nextBtn = document.querySelector(".firstNext");
let prev1Btn = document.querySelector(".prev1");
let next1Btn = document.querySelector(".next1");
let prev2Btn = document.querySelector(".prev2");
let next2Btn = document.querySelector(".next2");
let prev3Btn = document.querySelector(".prev3");
let submit = document.querySelector(".submit");
let active = 1;

const moveForward = () => {
    active++;
    if (active > steps.length) {
       active =  steps.length;
    }
    // progress();
}
const moveBackward = () => {
    active--;
    if (active <= 1) {
       active = 1; 
    }
    // progress();
}

nextBtn.addEventListener("click", function() {
    moveForward();
    const progress = () => {
        steps.forEach((steps, i) => {
            if (i < active) {
                 steps.classList.add("active");
            } else {
                 steps.classList.remove("active");
            }
        });
    
        bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
    
        if (active === 1) {
            moveBackward.disabled = true;
        } else if (active === steps.length) {
            moveForward.disabled = true;
        } else {
            moveBackward.disabled = false;  
            moveForward.disabled = false;
        }
    
        firstPage.style.marginLeft = "-25%";
    };
    progress();

});
next1Btn.addEventListener("click", function () {
    moveForward();
    const progress = () => {
    steps.forEach((steps, i) => {
        if (i < active) {
            steps.classList.add("active");
        } else {
            steps.classList.remove("active");
        }
    });

    bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";

    if (active === 1) {
        moveBackward.disabled = true;  
    } else if (active === steps.length) {
        moveForward.disabled = true;
    } else {
        moveBackward.disabled = false;  
        moveForward.disabled = false;
    }

    firstPage.style.marginLeft = "-50%";
    };
    progress();
});
next2Btn.addEventListener("click", function () {
    moveForward();
    const progress = () => {
    steps.forEach((steps, i) => {
        if (i < active) {
            steps.classList.add("active");
        } else {
            steps.classList.remove("active");
        }
    });

    bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";

    if (active === 1) {
        moveBackward.disabled = true;  
    } else if (active === steps.length) {
        moveForward.disabled = true;
    } else {
        moveBackward.disabled = false;  
        moveForward.disabled = false;
    }

    firstPage.style.marginLeft = "-75%";
    };
    progress();
})
submit.addEventListener("click", function () {
    setTimeout(() => {
        alert("Welcome to the world of A Song of Ice And Fire");
        window.location.reload();
    }, 850);    
})
prev1Btn.addEventListener("click", function () {
    moveBackward();
    const progress = () => {
    steps.forEach((steps, i) => {
        if (i < active) {
            steps.classList.add("active");
        } else {
            steps.classList.remove("active");
        }
    });

    bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";

    if (active === 1) {
        moveBackward.disabled = true;  
    } else if (active === steps.length) {
        moveForward.disabled = true;
    } else {
        moveBackward.disabled = false;  
        moveForward.disabled = false;
    }

    firstPage.style.marginLeft = "0%";
    };
    progress();
});
prev2Btn.addEventListener("click", function () {
    moveBackward();
    const progress = () => {
    steps.forEach((steps, i) => {
        if (i < active) {
            steps.classList.add("active");
        } else {
            steps.classList.remove("active");
        }
    });

    bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";

    if (active === 1) {
        moveBackward.disabled = true;  
    } else if (active === steps.length) {
        moveForward.disabled = true;
    } else {
        moveBackward.disabled = false;  
        moveForward.disabled = false;
    }

    firstPage.style.marginLeft = "-25%";
    };
    progress();
})
prev3Btn.addEventListener("click", function () {
    moveBackward();
    const progress = () => {
        steps.forEach((steps, i) => {
            if (i < active) {
                steps.classList.add("active");
            } else {
                steps.classList.remove("active");
            }
        });
    
        bar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
    
        if (active === 1) {
            moveBackward.disabled = true;  
        } else if (active === steps.length) {
            moveForward.disabled = true;
        } else {
            moveBackward.disabled = false;  
            moveForward.disabled = false;
        }
    
        firstPage.style.marginLeft = "-50%";
        };
        progress();
});










// let i = 0;
// const move = () => {
//     // if (i == 0) {
        
//         let width = 5;
//         const timer = setInterval(() => {
//             if (width >= 100) {
//                 clearInterval(timer);
//                 // i = 0;
//             } else {
//                 width++;
//                 bar.style.width = width + "%";
//                 bar.innerHTML = width + "%";

//             }
//         }, 899); 
// }
