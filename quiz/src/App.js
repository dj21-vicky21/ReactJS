import './App.css';
import { Quiz } from "./component/quizs";
import { useState } from "react";

function App() {
  
  const QuizLength = Quiz.length 
  var [i, seti] = useState(0);
  var [Score ,Setscore] = useState(0)
  var [Total ,Settotal] = useState(10)
  
  function Increment(p){
    if(i<QuizLength-1){
      seti(i+1)
      Settotal(Total+10)
    }
    else {
      var element = document.getElementById('modal7')
      element.classList.toggle('show')
    }
    if(document.getElementById(p).innerHTML === Quiz[i].answer){
      Setscore(Score+10)
    }
  }
  console.log(Total)
  
  function AlertCancel(){
    var element = document.getElementById("modal7");
    element.classList.remove("show") 
    seti(i=0)
    Setscore(Score=0)
    Settotal(Total=10)
}
  


  let CurrentQuistion = Quiz[i].question
  let CurrenOptionA = Quiz[i].option[0]
  let CurrenOptionB = Quiz[i].option[1]
  let CurrenOptionC = Quiz[i].option[2]
  let CurrenOptionD = Quiz[i].option[3]

  return (
    <div className='App' >
    <div className='container'>
      <div className='head'>{CurrentQuistion}</div>
      <div className='body'>


          <ul>
            <li id='li1' onClick={()=>{
              Increment('li1');
            }}>{CurrenOptionA}</li>  
            <li id='li2' onClick={()=>{
              Increment('li2');
            }}>{CurrenOptionB}</li>  
            <li id='li3' onClick={()=>{
              Increment('li3');
            }}>{CurrenOptionC}</li>  
            <li id='li4' onClick={()=>{
              Increment('li4');
            }}>{CurrenOptionD}</li>  
          </ul>
  


          <p className='totalquestions'><span>{i+1}</span>/4 questions</p>
          <p className='alert'>
          <div class="modal fade " id="modal7">
            <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title">You Answered All The Questions</h4>
              </div>
              <div class="modal-body">

              Your Score : {Score} / {Total}

              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-danger" onClick={AlertCancel} data-bs-dismiss="modal">close</button>
              </div>
          </div>
      </div>
  </div>
          </p>
      </div>
    </div>
    </div >
  );
}

export default App;
