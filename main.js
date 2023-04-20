document.addEventListener('DOMContentLoaded', () => {

    let index = 0
    for (const keys in localStorage){
        if (keys === 'index'){
            index = localStorage[keys]
        }
    }
    //iterate through object of localstorage
    if (localStorage.length > 0){
        //declare variable push and assign to ul
        let push = document.getElementById('unordered')
        //itereate through 
        for (let i = 0; i < localStorage.length - 1; i++ ){
            const list = document.createElement('li');
            list.innerText = localStorage[i];
            push.appendChild(list);
        }
    }
    localStorage.getItem('keyName')
//when user presses enter (or a button is pressed)
document.addEventListener('keydown', (e) => {
    //if keydown is enter
    if (e.key === 'Enter'){
        //create a new list element
    const list = document.createElement('li');
        //append textbox info to list element
    const note = document.getElementById('text').value;
    //add note to local storage to save when closed
    // localStorage.setItem(, node)
    // console.log(note)
    //assign list item innerText to be note
    list.innerText = note;
    list.setAttribute('id', index);
    localStorage.setItem(index, note);
    console.log(localStorage);
    index++;
    localStorage.setItem('index', index);
    console.log(index);
        //append list element to ul
    let push = document.getElementById('unordered')
       push.appendChild(list);
    
    //reset the textbox after submission
    document.getElementById('text').value = '';
    }
});

document.getElementById("clickMe").onclick = function(){
    let doc = document.getElementById('unordered')
    //establish edge case: if localStorage length is 1
    if (localStorage.length === 1) {
        localStorage.clear();
        let ele = document.getElementById('0');
        doc.removeChild(ele);
    }
    let length = localStorage.length - 1;
    localStorage.clear();
    // let doc = document.getElementById('unordered')
    //invoke a for loop up until the length of local storage
    for (let i = 0; i < length; i++) {
        let el = document.getElementById(i);
        doc.removeChild(el);
    }
    index = 0;
    //query select each list item with that given id
    //delete each list item
    console.log(localStorage);;
} 
// console.log(localStorage)
// function remove() {
//     localStorage.clear();
//     console.log(localStorage)
// }

});