import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Tamim','Liton','Shakib','Mushfiqur','MahmudUllah','Mashrafee'];

  //objects in array
  const products = [
    {name:'Photoshop',price:'$99'},
    {name:'illustrator',price:'$82'},
    {name:'Premier Pro',price:'$92.22'}
  ]
  const playerName =  players.map(batsman=> batsman);
  console.log(playerName);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        <h3>The Batsman & Product Name</h3>
        <ul>
          {
            players.map(batsman => <li>{batsman}</li>)
          }
          {
            products.map(productDes => <li>{productDes.name}</li>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit is done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Person name={players[2]} quality="Best All-Rounder in the world"></Person>
        <Person name={players[0]} quality="One of the best opener in the world"></Person>
        <Product productDes={products[0]} ></Product>

        {
          products.map(pdName => <Product productDes={pdName}></Product>)
        }  

        
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(10);
  const handlerIncrease = () => setCount( count + 1);//updated value of state 'setCount' 


  return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick={handlerIncrease}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
  )
}

function Product(props){
  const productStyle={
    color:'black',
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    margin:'20px',
    float:'left'
  }
  // console.log(props);
  const {name,price} = props.productDes;
  //each 'name' and 'price' set into these const variable
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>Price:{price}</h5>
      <button>Buy Now</button>

    </div>  
  )
}

function Person(props){
  const personStyling={
    border:'2px solid yellow',
    margin:'10px',
    padding:'20px',
    width:'400px'
  }
  return (
  <div style={personStyling}>
    <h2>Name:{props.name}</h2>
    <h6>{props.quality} </h6>
    <h6>Bangladesher pran</h6>
  </div>
  ) 
}

function User(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))//set data in 'user' state
  },[]);
  return(
    <div>
      <h3>Dynamic Data:{users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
