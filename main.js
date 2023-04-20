document.addEventListener('DOMContentLoaded', () => {
    
//when user presses enter (or a button is pressed)
body.addEventListener('keydown', (e) => {
    //if keydown is enter
    if (e.code === 'enter'){
        //create a new list element
    const list = document.createElement('li');
        //append textbox info to list element
    const note = document.getElementById('textbox').value;
    list.innerText = note;
        //append list eleemnt to ul
        document.ul.appendChild(list);
    }
})
   

});