
//define ui elements
let milkb = document.querySelector('#milk');
let bananab = document.querySelector('#banana');
let appleb = document.querySelector('#apple');
let orangeb = document.querySelector('#orange');
let list = document.querySelector('#lists');


// define add event listener
milkb.addEventListener('click', milkproduct);
bananab.addEventListener('click', bananaproduct);
appleb.addEventListener('click', appleproduct);
orangeb.addEventListener('click', orangeproduct);
list.addEventListener('click', removeitem);



function milkproduct(e) {
    let name = document.querySelector('#milkname').textContent;
    let price = document.querySelector('#milkprice').textContent;

    addcart(name, price);
}

function bananaproduct(e) {
    let name = document.querySelector('#banananame').textContent;
    let price = document.querySelector('#bananaprice').textContent;


    addcart(name, price);
}

function appleproduct(e) {
    let name = document.querySelector('#applename').textContent;
    let price = document.querySelector('#appleprice').textContent;


    addcart(name, price);
}

function orangeproduct(e) {
    let name = document.querySelector('#orangename').textContent;
    let price = document.querySelector('#orangeprice').textContent;


    addcart(name, price);
}

function addcart(name, price) {
    let list = document.querySelector('#lists');
    let row = document.createElement('tr');
    row.innerHTML = `
    <td id="titile">${name}</td>
    <td>${price}</td>
    <td><button type="submit" id="delete" class="btn btn-danger ">Remove</button></td>
    `;

    list.appendChild(row);

    // let delet = document.querySelector('#delete');
    // delet.addEventListener('click', removeitem);


}

function removeitem(e) {
    if (e.target.hasAttribute('id')) {
        e.target.parentElement.parentElement.remove();
        console.log(e);
    }
}