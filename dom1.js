let ulElement = document.createElement('ul')

let liFirst = document.createElement('li')
let liSecond = document.createElement('li')
let liThird = document.createElement('li')

liFirst.appendChild(document.createTextNode('첫번째 리스트'))
liSecond.appendChild(document.createTextNode('두번째 리스트'))
liThird.appendChild(document.createTextNode('세번째 리스트'))

ulElement.appendChild(liFirst);
ulElement.appendChild(liSecond);
ulElement.appendChild(liThird);

document.body.appendChild(ulElement);