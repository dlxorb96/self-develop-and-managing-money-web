'use stirct';

const firstNavBar = document.querySelector('.nav__bar li:nth-child(1)')
const secondNavBar = document.querySelector('.nav__bar li:nth-child(2)')
const thirdNavBar = document.querySelector('.nav__bar li:nth-child(3)')

function firstClickEvent(e){
  e.preventDefault()
  firstNavBar.classList.add('clicked')
}
function secondClickEvent(e){
  e.preventDefault()
  secondNavBar.classList.add('clicked')


}
function thirdClickEvent(e){
  e.preventDefault()
  thirdNavBar.classList.add('clicked')

}

firstNavBar.addEventListener('click', firstClickEvent)
secondNavBar.addEventListener('click', secondClickEvent)
thirdNavBar.addEventListener('click', thirdClickEvent)