/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name:Kyle Thom
 * Email:thomk@oregonstate.edu
 */

// if the create twit button is hit then the module becomes unhidden.

 var redbutton = document.getElementById("create-twit-button");
 var modal = document.getElementById("create-twit-modal");
 var modalBackdrop = document.getElementById("modal-backdrop");
 var closemodal = document.getElementsByClassName("modal-close-button")[0];
 var cancelmodal = document.getElementsByClassName("modal-cancel-button")[0];
 var newtwitinput = document.getElementById("twit-text-input");
 var twitcreatebutton = document.getElementsByClassName("modal-accept-button")[0];
 var authorinput = document.getElementById("twit-attribution-input");
 var twitarray = Array.from(document.querySelectorAll(".twit"));
 var searchbarinput = document.getElementById("navbar-search-input");
 var twitcontainer =document.getElementsByClassName("twit-container")[0];


function toggle(){
 if (modal.classList.contains("hidden")){
    modal.classList.remove("hidden")
    modalBackdrop.classList.remove("hidden")
 } else {
    newtwitinput.value = ("")
    authorinput.value = ("")
    modal.classList.add("hidden")
    modalBackdrop.classList.add("hidden")
 }
 
}
redbutton.addEventListener('click',toggle)
closemodal.addEventListener('click', toggle)
cancelmodal.addEventListener('click', toggle)
twitcreatebutton.addEventListener('click', maketwit)
searchbarinput.addEventListener('input',search)

//toString
function maketwit(){
var newtwit = document.createElement("article")
var newicon = document.createElement("div")
var newcontent = document.createElement("div")
var newtext = document.createTextNode(newtwitinput.value)
var newAuthor = document.createTextNode(authorinput.value)
var bullhorn = document.createElement("i")
var ptext = document.createElement("p")
var atext = document.createElement("p")
var twitcontainer =document.getElementsByClassName("twit-container")[0];
var authorlink = document.createElement("a")

authorlink.href = "#"
newtwit.classList.add("twit")
newicon.classList.add("twit-icon")
newcontent.classList.add("twit-content")
ptext.classList.add("twit-text")
atext.classList.add("twit-author")
bullhorn.classList.add("fas")
bullhorn.classList.add("fa-bullhorn")


newtwit.appendChild(newicon)
newtwit.appendChild(newcontent)
newicon.appendChild(bullhorn)
newcontent.appendChild(ptext)
newcontent.appendChild(atext)
ptext.appendChild(newtext)
atext.appendChild(authorlink)
authorlink.appendChild(newAuthor)
twitcontainer.appendChild(newtwit)
twitarray.push(newtwit)


newtwitinput.value = ("")
authorinput.value = ("")
modal.classList.add("hidden")
modalBackdrop.classList.add("hidden")
}

function search(){
    twitarray.filter(function (element){ 
    if(twitcontainer.contains(element))
        return true
    else 
        return false
}).forEach(function(element2){
    twitcontainer.removeChild(element2)
})


twitarray.filter(function(element3){
    if(element3.innerText.toLowerCase().includes(searchbarinput.value.toLowerCase())){
        return true
    }else 
        return false
    
}).forEach(function(element4){
    twitcontainer.appendChild(element4)
})
}


