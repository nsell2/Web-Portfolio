"use strict";

let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let backgroundSpan = $("#background");
let processSpan = $("#process");
let resultsSpan = $("#results");
let linkToProject = $("#linkToProject");
let nobodysFavorite = document.getElementById("nobodysFavorite");
let pureImagination = document.getElementById("pureImagination");
let dndSimplified = document.getElementById("dndSimplified");

$("#project1").click(function(){
    project1.classList.remove("deselected");
    project1.classList.add("selected");
    project2.classList.remove("selected");
    project2.classList.add("deselected");
    project3.classList.remove("selected");
    project3.classList.add("deselected");
    console.log("Project 1");
    
    nobodysFavorite.classList.remove("hideProject");
    nobodysFavorite.classList.add("displayProject");
    pureImagination.classList.add("hideProject");
    dndSimplified.classList.add("hideProject");
    // let background = `Nobody's Favorite is a punk rock band based out of Moorhead, MN that was formed in 2023. As the band is still fairly new, they needed a website that would help boost their name recognition, display dates of upcoming performances, and give a preview of the merchandise that they sell at their shows.`;
    // let process = `I first had the client send me the band's logo, photos of merchandise options, candids from their past performances, and the information on their next upcoming shows. This helped me better understand the band's identity, which was important for selecting a color scheme and typography for the website. I then created a simple outline that I followed as I wrote the HTML code for the website's content. Once that was finished, I wrote the CSS and JavaScript code that gave the website its style and functionality.`;
    // let results = `The website was completed before the deadline and works as intended. The band was very pleased when they were sent the final result. It has a clean and simple layout that can easily be edited or added to if the band needs something changed, but still feels like a natural extension of the band's identity.`;
    // let projectLink = `<a href="https://nsell2.github.io/nobodys.favorite/" class="underline">Nobody's Favorite Band</a>`;
    // backgroundSpan.innerHTML = background;
    // processSpan.innerHTML = process;
    // resultsSpan.innerHTML = results;
    // linkToProject.innerHTML = projectLink;
});

$("#project2").click(function(){
    project2.classList.remove("deselected");
    project2.classList.add("selected");
    project3.classList.remove("selected");
    project3.classList.add("deselected");
    project1.classList.remove("selected");
    project1.classList.add("deselected");
    console.log("Project 2")

    pureImagination.classList.remove("hideProject");
    pureImagination.classList.add("displayProject");
    nobodysFavorite.classList.add("hideProject");
    dndSimplified.classList.add("hideProject");
    // let background = `The Digital Publishing course at ASU teaches students to use industry-standard methods and technologies to produce web and print publication materials. The final project for this course was to research various design conferences before selecting one and creating various marketing materials for it.`;
    // let process = `The first step in this project was researching the design conference I chose, Creative South, to get a sense of the organization's brand identity. Next, I selected the color palettes and fonts to use in my marketing materials, keeping everything cohesive. Once I had a good understanding of what information I would need to include in each of my materials, I started sketching them all out on paper. After I had all of my ideas written down and sketched out, I used Adobe InDesign to create the four different types of marketing materials.`;
    // let results = `I was able to complete all of the deliverables by their due date, which included a web advertisement banner, a name tag/badge to be worn on a lanyard, a folding table tent, and a booklet with details about the conference. I was very happy with how each of the designs turned out and I got an A on the project as a whole.`;
    // let projectLink = `<a href="https://drive.google.com/file/d/1ENej6iqGNyMLCmvVFUFzqnboBBvAmNGr/view?usp=sharing" class="underline">Pure Imagination Materials</a>`;
    // backgroundSpan.innerHTML = background;
    // processSpan.innerHTML = process;
    // resultsSpan.innerHTML = results;
    // linkToProject.innerHTML = projectLink;
});

$("#project3").click(function(){
    project3.classList.remove("deselected");
    project3.classList.add("selected");
    project2.classList.remove("selected");
    project2.classList.add("deselected");
    project1.classList.remove("selected");
    project1.classList.add("deselected");
    console.log("Project 3")

    dndSimplified.classList.remove("hideProject");
    dndSimplified.classList.add("displayProject");
    pureImagination.classList.add("hideProject");
    nobodysFavorite.classList.add("hideProject");
});


// Menu Opener
let menuOpener = document.getElementById("menuControl");
let aboutNav = document.getElementById("aboutNav");
let projectsNav = document.getElementById("projectsNav");
let contactNav = document.getElementById("contactNav");
document.getElementById("controlWrapper").addEventListener("click", function(){
    menuOpener.classList.toggle("open");
    menuOpener.classList.toggle("closed");
    aboutNav.classList.toggle("open");
    aboutNav.classList.toggle("closed");
    projectsNav.classList.toggle("open");
    projectsNav.classList.toggle("closed");
    contactNav.classList.toggle("open");
    contactNav.classList.toggle("closed");
});
