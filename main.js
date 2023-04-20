document.addEventListener('DOMContentLoaded', () => {

    //function to input stored items when reloaded
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
            list.setAttribute('id', i);
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
    //make it so no empty dots can just be added
    if (note === '') return;
    //add note to local storage to save when closed
    // localStorage.setItem(, node)
    // console.log(note)
    //assign list item innerText to be note
    list.innerText = note;
    //assign id to current index value for each created element
    list.setAttribute('id', index);
    //add current note to localStorage to be stored on client side 
    localStorage.setItem(index, note);
    // console.log(localStorage);
    //incriment index
    index++;
    //assign value of index to localStorage
    localStorage.setItem('index', index);
    // console.log(index);
        //append list element to ul
    let push = document.getElementById('unordered')
       push.appendChild(list);
    
    //reset the textbox after submission
    document.getElementById('text').value = '';
    }
});

document.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target = 'li'){
        let doc = document.getElementById('unordered');
        let currentStorage = e.target.id
        let currentLi = e.target;
        console.log(currentLi)
        doc.removeChild(currentLi)
        localStorage.removeItem(currentStorage);
        console.log(localStorage)
        index--;
        localStorage.setItem('index', index);
        // for (let i = index ; i > -1; i--){
        //     let lest =  document.getElementById(i)
        //     if (lest === 'null') return;
        //     lest.setAttribute('id', i - 1)
        //     localStorage.setItem(index, lest)
        // }
    }
})

// const dots = document.getElementsByTagName("li");
// for (const dot of dots){
//     dot.addEventListener("click", function(){
//         console.log(dot)
//         let doc = document.getElementById('unordered')
//         doc.removeChild(dot)
//         localStorage.removeItem(dot)
//         index--;
//     } )
// }

//to fix I think I have to reiterate through each key of the list and reassign their values to the correct i,
    //and then also update their values in localStorage

//function to clear all notes and local cache
document.getElementById("clickMe").onclick = function(){
    let doc = document.getElementById('unordered')
    //establish edge case: if localStorage length is 1
    if (localStorage.length === 1) {
        localStorage.clear();
        let ele = document.getElementById('0');
        doc.removeChild(ele);
    }
    let length = localStorage.length;
    localStorage.clear();
    console.log(doc)
    // let doc = document.getElementById('unordered')
    //invoke a for loop up until the length of local storage
    for (let i = 0; i < index; i++) {
        let el = document.getElementById(i);
        doc.removeChild(el);
    }
    index = 0;
    //query select each list item with that given id
    //delete each list item
    // console.log(localStorage);;
} 
// console.log(localStorage)
// function remove() {
//     localStorage.clear();
//     console.log(localStorage)
// }

});