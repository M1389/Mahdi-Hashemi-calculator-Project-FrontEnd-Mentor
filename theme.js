let btnTheme1 = document.querySelector('.theme-1');
let btnTheme2 = document.querySelector('.theme-2');
let btnTheme3 = document.querySelector('.theme-3');



btnTheme2.onclick = function() {
    document.body.classList.add('second-theme')
    document.body.classList.remove('third-theme')
    document.body.classList.remove('first-theme')
    document.getElementById('cursor').classList.remove('.cursor')
    document.getElementById('cursor').classList.add('cursor-2')
    document.getElementById('cursor').classList.remove('cursor-3')
    
    


}


btnTheme3.onclick = function() {
    document.body.classList.add('third-theme')
    document.body.classList.remove('second-theme')
    document.body.classList.remove('firsr-theme')

    document.getElementById('cursor').classList.add('cursor-3')
    document.getElementById('cursor').classList.remove('cursor-2')
    document.getElementById('cursor').classList.remove('cursor')

}

btnTheme1.onclick = function() {
    document.body.classList.add('first-theme')
    document.body.classList.remove('second-theme')
    document.body.classList.remove('third-theme')
    
    
    document.getElementById('cursor').classList.remove('cursor-2')
    document.getElementById('cursor').classList.add('cursor')
    document.getElementById('cursor').classList.remove('cursor-3')



}


