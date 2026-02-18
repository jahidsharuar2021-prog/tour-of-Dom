//parent node 
const maincontainer=document.getElementById('main-container');

//create child node 
const placesection=document.createElement('section');
// create h1
const h1=document.createElement('h1');
h1.innerText='places I want to visit';
placesection.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
const li2=document.createElement('li');
li1.innerText='bandorbon';
li2.innerText='sundorbon';
ul.appendChild(li1);
ul.appendChild(li2);
placesection.appendChild(ul);

// append placesection to the main container
maincontainer.appendChild(placesection);


// another section to different way
const booksection =document.createElement('section');
booksection.innerHTML=`
<h1>Book I need to read</h1>
<ul>
<li>physices</li>
<li>chemistry</li>
</ul>
`
 maincontainer.appendChild(booksection)