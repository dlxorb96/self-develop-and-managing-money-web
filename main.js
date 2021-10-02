'use stirct';

const firstNavBar = document.querySelector('.nav__bar li:nth-child(1)')
const secondNavBar = document.querySelector('.nav__bar li:nth-child(2)')
const thirdNavBar = document.querySelector('.nav__bar li:nth-child(3)')
const $content = document.querySelector('.content')
const plusButton = document.querySelector('.add_clear_delete li:nth-child(1)')


function firstClickEvent(e){
  e.preventDefault()
  firstNavBar.classList.add('clicked')
  secondNavBar.classList.remove('clicked')
  thirdNavBar.classList.remove('clicked')  
}

function secondClickEvent(e){
  e.preventDefault()
  secondNavBar.classList.add('clicked')
  firstNavBar.classList.remove('clicked')
  thirdNavBar.classList.remove('clicked')
}

function thirdClickEvent(e){
  e.preventDefault()
  thirdNavBar.classList.add('clicked')
  firstNavBar.classList.remove('clicked')
  secondNavBar.classList.remove('clicked')
}

function addDivEvent(e){
  // 추가 클릭시
  e.preventDefault()
  //폼, 인풋태그 만들기 작성용, 제출용 
  const newListInput = document.createElement('input')
  const newListButton = document.createElement('input')
  newListButton.type = 'button'
  const newListForm = document.createElement('form');
  newListInput.className = 'iteminput'
  newListButton.className = 'itemButton';
  newListForm.className = 'itemForm'
  newListForm.appendChild(newListInput)
  newListForm.appendChild(newListButton)
  $content.appendChild(newListForm)
  newListForm.addEventListener('submit',(e)=>{
    const newList = newListInput.value
    const printList = document.createElement('div')
    $content.appendChild(printList);
    printList.textContent = newList
    e.target.remove()
    console.log(e)
  })
}

// function aaEvents(e){
//   const newList = e.target.value
//   e.target.value = ''
//   const newListText = document.createElement('div')
//   newListText.textContent = newList;
//   $content.appendChild(newListText)
// }

firstNavBar.addEventListener('click', firstClickEvent)
secondNavBar.addEventListener('click', secondClickEvent)
thirdNavBar.addEventListener('click', thirdClickEvent)
plusButton.addEventListener('click', addDivEvent)