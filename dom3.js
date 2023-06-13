const React = require('react')

//* crateElement 메서드는 type, props, children를 인자로 받습니다.
const list = React.createElement(
  'ul',
  null,
  [
    React.createElement('li', null, '첫번째 리스트'),
    React.createElement('li', null, '두번째 리스트'),
    React.createElement('li', null, '세번째 리스트')
  ]
)

console.log(list);