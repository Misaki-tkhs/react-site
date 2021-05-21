import React from 'react';
import {useState} from 'react';
import {Top} from "./top.js";
import {Hobby} from "./Hobby";

function App() {
  const [tab,setTab] = useState('top');

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('top')}>トップ</li>
          <li onClick={()=> setTab('hobby')}>ホビー</li>
        </ul>
      </header>
      <hr/>
      {
        tab === 'top' ? <Top /> : <Hobby />
      }
    </div>
  );
}


// class App extends React.Component{ 
//   constructor(props) {
//     super(props);
//     this.state = {description: 'クリック前'}
//   }
//   changeDescription(){
//     this.setState({description: 'クリック後'
//   })
//   }

//   render() {
//     const {description} = this.state;
//     return(
//       <div>
//         {description}
//         <Top title="取り扱い言語" />
//         <button onClick={() => this.changeDescription()}>
//           ボタン
//         </button>
//       </div>
//     )
//   }
// }


export default App;
