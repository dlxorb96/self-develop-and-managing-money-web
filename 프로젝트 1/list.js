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
    this.parentNode.parentNode.style.backgroundColor = 'gray'

  }else if(e.target.textContent === '✔'){
    e.target.textContent = '';
    this.parentNode.parentNode.style.backgroundColor = '#fff'
  }
}

// 플러스 버튼 클릭 시 컨테이너 만들기
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

let tagclickflag = true;

function tagClickEvent(e){
  e.preventDefault()
  if(!tagclickflag)return;
  if(this.textContent === '+'){
    const plusTag = document.querySelector('.tagBox:last-child')
    // const $form = document.querySelector('#input_form')
    // $form.addEventListener('submit', submitEventInInputForm);
    createForm(plusTag)
    const newTagName = document.createElement('div')
    newTagName.className = 'tagBox'
    tagBoxZip.splice(-1, 0, newTagName)
    this.parentNode.insertBefore(newTagName, plusTag)
  }
  this.classList.toggle('active')
  list.tag = this.textContent
  createInput(this.parentNode.parentNode)
  tagclickflag = false;
}

//plusTag 눌렀을 때 input포함한 form 만들기
function createForm(tagBox){
  const $form = document.createElement('form');
  const inputTypeText = document.createElement('input');
  const inputTypeSubmit = document.createElement('input');
  inputTypeText.type = 'text';
  inputTypeText.placeholder = '입력';
  inputTypeText.id = 'inputTypeText';
  inputTypeSubmit.type = 'submit'
  inputTypeSubmit.id = 'inputTypeSubmit'
  $form.appendChild(inputTypeText)
  $form.appendChild(inputTypeSubmit)
  tagBox.parentNode.insertBefore($form,tagBox)
  $form.addEventListener('submit', formSubmitEvent)
  return $form;
}

function formSubmitEvent(e){
  e.preventDefault();
}

//인풋 만들기
function createInput(inherited){
  const $form = document.createElement('form')
  $form.id = 'input_form'
  const textInput = document.createElement('input')
  textInput.id = 'input_form'
  textInput.type = 'text'
  textInput.placeholder = '입력하세요'
  // textInput.maxLength = '150'
  const buttonInput = document.createElement('input')
  buttonInput.value = '완료'
  buttonInput.type = 'submit'
  $form.append(textInput, buttonInput)
  inherited.appendChild($form);
  $form.addEventListener('submit', submitEventInInputForm)
  return $form
}

let inputflag = true;

// 인풋 submit 이벤트
function submitEventInInputForm(e){
  e.preventDefault()
  if(!inputflag)return;
  const inputValue = this.children[0].value
  this.children[0].value = ''
  list.content = inputValue
  const doneInput = document.createElement('div')
  doneInput.textContent = inputValue
  doneInput.className = 'input_content'
  this.parentNode.appendChild(doneInput)
  const doneClick = document.createElement('div');
  doneClick.className ='done_click'
  this.parentNode.appendChild(doneClick)
  doneClick.textContent = '완료'
  doneClick.addEventListener('click', doneClickEvent)
  inputflag = false;
}

// 완료 클릭시 이벤트
function doneClickEvent(){
  this.parentNode.remove()
  createRealContatiner(list.tag, list.content)
  inputflag = true;
  tagclickflag = true;
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
  plusButton.parentNode.insertBefore(container, plusButton)
  // $wrap.appendChild(container);
  container.appendChild(box);
  box.appendChild(checkBox);
  box.appendChild(textBox);
  box.appendChild(i);
  textBox.appendChild(h3)
  textBox.appendChild(p)

  checkBox.addEventListener('click', buttonClickEvent);
  return container;
}




$button.addEventListener('click', buttonClickEvent);
plusButton.addEventListener('click', plusButtonClickEvent);
