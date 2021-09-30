'use strict';
//html 태그 선언
const $wrap = document.querySelector('.wrap');
const $button = document.querySelector('.checkBox')
const plusButton = document.querySelector('.plus')
const $container = document.querySelector('.container')
const $section = document.querySelector('section');
const inputForm = document.querySelector('#input_form')
const divHasForm = document.querySelector('.formBox')
const inputFormInInput = document.querySelector('#input_form_input')

const tagBoxZip = ['공부', '운동', '일반', '기타', '+'];
const list = {
  tag: null,
  content: null,
};

// 버튼 클릭시 체크 표시나오기
function buttonClickEvent(e){
  e.preventDefault();
  if(e.target.textContent === ''){
    e.target.textContent = '✔'
    $container.style.backgroundColor = 'gray'

  }else if(e.target.textContent === '✔'){
    e.target.textContent = '';
    $container.style.backgroundColor = '#fff'
  }
}

// 플러스 버튼 클릭스 컨테이너 만들기
function plusButtonClickEvent(e){
  e.preventDefault();
  const createContainer = document.createElement('div')
  createBox(createContainer);
  createContainer.className = 'container new'
  plusButton.parentNode.insertBefore(createContainer, plusButton);
}

// 컨테이너 안 박스만들기
function createBox(newContainer){
  const tagWrap = document.createElement('div');
  createTagBox(tagWrap)
  newContainer.appendChild(tagWrap)
  // newContainer.addEventListener('clcik',tagClickEvent)
  tagWrap.className = 'tagWrap'
}

// 박스 안에 태그 만들기
function createTagBox(newTagBox){
  for(let i =0; i<tagBoxZip.length; i++){
    const tagBox = document.createElement('div')
    tagBox.textContent = tagBoxZip[i]
    tagBox.className = 'tagBox'
    newTagBox.appendChild(tagBox)
    tagBox.addEventListener('click', tagClickEvent)
  }
}

//태그 클릭 이벤트
function tagClickEvent(e){
  e.preventDefault()
  this.classList.toggle('active')
  list.tag = this.textContent
  createInput()
}

// 태그 클릭시 나오는 인풋 이벤트 
function submitEventInInputForm(e){
  e.preventDefault()
  const inputValue = this.children[0].value
  this.children[0].value = ''
  list.content = inputValue
  const doneInput = document.createElement('div')
  doneInput.textContent = inputValue
  doneInput.className = 'input_content'
  // 여기서 다시 건드려야함
  this.parentNode.appendChild(doneInput)
  const doneClick = document.querySelector('div');
  doneClick.className ='done_click'
  this.parentNode.parentNode.appendChild(doneClick)
  doneClick.textContent = '완료'
  doneClick.addEventListener('click', doneClickEvent)
}


// function submitEventInInputForm(e){
//   e.preventDefault()
//   console.log(this)
//   const inputValue = e.traget.value
//   inputFormInInput.value = ''
//   list.content = inputValue
//   const doneInput = document.createElement('div')
//   doneInput.textContent = inputValue
//   doneInput.className = 'input_content'
//   this.parentNode.parentNode.appendChild(doneInput)
//   divHasForm.style.display = 'none'
//   const doneClick = document.querySelector('div');
//   doneClick.className ='done_click'
//   this.parentNode.parentNode.appendChild(doneClick)
//   doneClick.textContent = '완료'
//   doneClick.addEventListener('click', doneClickEvent)
// }

// 완료 클릭시 이벤트
function doneClickEvent(){
  // this.parentNode.remove()
  createRealContatiner(list.tag, list.content)
}

function createRealContatiner(tag, content){
  const container = document.createElement('div');
  const box = document.createElement('div');
  const checkBox = document.createElement('div');
  const textBox = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const i =document.createElement('i');
  container.className = 'container'
  box.className = 'box'
  checkBox.className = 'checkBox'
  textBox.className = 'textBox'
  i.className = 'fas fa-ellipsis-h'
  h3.textContent = tag
  p.textContent = content
  $wrap.appendChild(container);
  container.appendChild(box);
  box.appendChild(checkBox);
  box.appendChild(textBox);
  box.appendChild(i);
  textBox.appendChild(h3)
  textBox.appendChild(p)
  return container;
}


//인풋 만들기
function createInput(){
  const $form = document.createElement('form')
  $form.id = 'input_form'
  const textInput = document.createElement('input')
  textInput.id = 'input_form'
  textInput.type = 'text'
  textInput.placeholder = '입력하세요'
  const buttonInput = document.createElement('input')
  buttonInput.value = '완료'
  buttonInput.type = 'button'
  $form.append(textInput, buttonInput)
  document.body.appendChild($form)
  $form.addEventListener('submit', submitEventInInputForm)
  return $form
}

$button.addEventListener('click', buttonClickEvent);
plusButton.addEventListener('click', plusButtonClickEvent);
