import React from "react";

function App() {
  let textBox = {
    first: '첫번째 리스트',
    second: '두번째 리스트',
    third: '세번째 리스트',
  }
  return (
    <ul>
      <li>{textBox.first}</li>
      <li>{textBox.second}</li>
      <li>{textBox.third}</li>
    </ul>
  )

}

export default App;