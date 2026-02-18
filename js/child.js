// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.;
//create element and set inner text or inner html
const newchild =document.createElement('li');

newchild.innerText='New born baby footballer';
 
//find the parent where you will add the cild
const playersList =document.getElementById('player-list');
// append the child to the parents

playersList.appendChild(newchild);

// appendchild new item add kore