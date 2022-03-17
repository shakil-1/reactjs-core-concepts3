import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <LoadComment></LoadComment>
    </div>
  );
}

  function LoadComment () {
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  },[])
 
  return(
    <div>
      <h2>{comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email}  body={comment.body}></Comment> )
      }
    </div>
  )
}

function Comment(props){
  return(
    <div>
      <h4>email : {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  const headdelincriese = () => setCount(count + 1);
  const headdeldncriese = () => setCount(count - 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={headdelincriese}>Increase</button>
      <button onClick={headdeldncriese}>Decrease</button>
    </div>
  )
}
export default App;
