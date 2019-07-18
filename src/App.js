import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Animate } from 'react-move';
import {Flipper, Flipped} from 'react-flip-toolkit';
import shuffle from 'lodash/shuffle';


   // constructor(props){
     //   super(props);
       // this.state={game: 'begins'}
    //}

//function createBall(){
//   const ball = document.getElementById("1").createElement('div');
//ball.className=('ball');
//}

const ListShuffler = () => {
    const[data, setData] = useState([1,2,3]);
    const shuffleList = () => setData(shuffle(data));

//const Ball = document.createElement("div");
  //  Ball.setAttribute('class', 'ball'); 
    //document.getElementById("1").appendChild(Ball);        
 
 return(<Flipper flipKey={data.join("")}>

        <h1>Test your luck!</h1>
 
        <button onClick={shuffleList}>Start!</button>

<div className='list'>
    {data.map(d=> ( 
     <Flipped key={d} flipId={d}>
        <div id={d} className="trapezium cup">{d}</div>
</Flipped>
        ))}
 </div>     

    </Flipper>

);
};

export default ListShuffler;

//ReactDOM.render(<ListShuffler />, document.querySelector('#root'));

