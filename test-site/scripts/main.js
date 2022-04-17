let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/guanxuan.jpg') {
      myImage.setAttribute('src', 'images/guanxuan2.jpg');
    } else {
      myImage.setAttribute('src', 'images/guanxuan.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + '被博呆甜到了';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + '被博呆甜到了';
}

myButton.onclick = function() {
   setUserName();
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName + '被博呆甜到了';
  }
}