document.addEventListener('DOMContentLoaded', () => {
    
//when user presses enter (or a button is pressed)
document.addEventListener('keydown', (e) => {
    //if keydown is enter
    if (e.key === 'Enter'){
        //create a new list element
        console.log('hello')
    const list = document.createElement('li');
        //append textbox info to list element
    const note = document.getElementById('text').value
    // console.log(note)
    //assign list item innerText to be note
    list.innerText = note;
        //append list eleemnt to ul
    let push = document.getElementById('unordered')
       push.appendChild(list);
    }
})
});