/*
	Name: Narmeen Khalid
	File: main.js
	Date: 22nd November 2023
	The javascript file with the added variables and other changes
	required to make the program work
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const altdescriptions = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from an Egyptian tomb',
    'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const image of imagenames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `imagenames/${image}`);
    newImage.setAttribute('alt', `altdescriptions[image]`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */
