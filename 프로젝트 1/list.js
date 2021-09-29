'use strict';

const $button = document.querySelector('.checkBox')
const plusButton = document.querySelector('.plus')
const $container = document.querySelector('.container')
const $section = document.querySelector('section');

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
  // const create
  createContainer.className = 'container'
  plusButton.parentNode.insertBefore(createContainer, plusButton);
}

$button.addEventListener('click', buttonClickEvent);
plusButton.addEventListener('click', plusButtonClickEvent);
