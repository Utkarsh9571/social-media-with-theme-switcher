const toggleButton = document.getElementById('toggle-button')
const whiteBall = document.querySelector('.white-ball')

const body = document.body
const container = document.querySelector('.container')
const header = document.querySelector('.header')
const headerTitle = document.querySelector('.header h1')
const followerNum = document.querySelector('.header h2')
const infoCard = document.querySelectorAll('.info-card')
const username = document.querySelectorAll('.total-followers h1, h3')
const followers = document.querySelectorAll('.info-card h2')
const overviewCard = document.querySelectorAll('.overview-card')
const likesAndViews = document.querySelectorAll('.overview h1')
const todayFollowers = document.querySelectorAll('.overview h2')
const overviewTitle = document.querySelector('.overview h1')
const facebookText = document.querySelector('.facebook h4')


const slider = () =>{
    if(toggleButton.style.justifyItems === 'start'){
        toggleButton.style.justifyItems = 'end';
        whiteBall.style.backgroundColor = 'white';
        toggleButton.style.backgroundImage = 'none';
    } else {
        toggleButton.style.justifyItems = 'start';
        whiteBall.style.backgroundColor = 'hsl(232, 19%, 15%)';
        toggleButton.style.backgroundImage = 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
    }
}

const themeChange = () =>{

    if (toggleButton.style.justifyItems === "end"){
        body.style.backgroundColor = "white"
        container.style.backgroundColor = "white"
        header.style.backgroundColor = "rgba(248,249,254,255)"
        headerTitle.classList.add('light')
        followerNum.classList.add('gray')
        overviewTitle.classList.add('gray')
        facebookText.classList.add('green')
        infoCard.forEach(card =>{
            card.classList.add('light-hover')
        } )
        overviewCard.forEach(card =>{
            card.classList.add('light-hover')
        } )
        followers.forEach(line =>{
            line.classList.add('light')
        } )
        todayFollowers.forEach(line =>{
            line.classList.add('light')
        } )
        username.forEach(line =>{
            line.classList.add('gray')
        } )
        likesAndViews.forEach(line =>{
            line.classList.add('gray')
        } ) 

    } else{
        body.style.backgroundColor = "hsl(230, 17%, 14%)"
        container.style.backgroundColor = "hsl(230, 17%, 14%)"
        header.style.backgroundColor = "rgba(32,34,47,255)"
        headerTitle.classList.remove('light')
        followerNum.classList.remove('gray')
        overviewTitle.classList.remove('gray')
        facebookText.classList.remove('green')
        infoCard.forEach(card =>{
            card.classList.remove('light-hover')
        } )
        overviewCard.forEach(card =>{
            card.classList.remove('light-hover')
        } )
        followers.forEach(line =>{
            line.classList.remove('light')
        } )
        todayFollowers.forEach(line =>{
            line.classList.remove('light')
        } )
        username.forEach(line =>{
            line.classList.remove('gray')
        } )
        likesAndViews.forEach(line =>{
            line.classList.remove('gray')
        } )
    }
}


toggleButton.addEventListener('click', ()=>{
    slider();
    themeChange();
})

console.log(facebookText)