let screen = document.querySelector('.input-result');
let btn = document.querySelectorAll('.num-but');
let clearbtn = document.querySelector('.res-btn');
let equalbtn = document.querySelector('.eq-btn');
let delBtn = document.querySelector('.del-btn');

function theComputerFunc() {
    btn.forEach((button) => {
        button.addEventListener('click' , (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    theEqualBtn()

    delBtn.addEventListener('click' , () => {
        screen.value = screen.value.substring(0, screen.value.length - 1)
        
        
        
    })

    clearbtn.addEventListener('click' , () => {
        screen.value = ""
    })

    
}

function theEqualBtn() {
    equalbtn.addEventListener('click' , () => {
        if (screen.value === '') {
            screen.value = "";
        }else{
            let answer = math.evaluate(screen.value)
            screen.value = answer;
        }
    })
    
}

theComputerFunc()

function formatInput(input) {
    // Remove existing commas and any non-digit characters
    let inputValue = screen.value.replace(/[,]|[\D]/g, '');
    
    // Insert commas every 3 characters
    let formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Set the formatted value back to the input field
    screen.value = formattedValue;
}



function run() {
    setTimeout(() => {
        if(screen.value.includes(".")) {
            screen.value = screen.value;
        }else if(screen.value.includes("-")) {
            screen.value = screen.value;
        }else{
            formatInput(screen);
        }
    
    },200)
}

    



