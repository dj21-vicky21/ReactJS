import './App.css';
import {New} from "./component/components"

function App() {
  function disable(){
    let TextareaDisable = document.getElementById('popuparea')
    let add = document.getElementById('add')
    TextareaDisable.style.display = 'none'
    add.style.display = 'block'
  }
  function enable(){
    let TextareaEnable = document.getElementById('popuparea')
    let text = document.getElementById('textarea')
    TextareaEnable.style.display = 'flex'
    let add = document.getElementById('add')
    add.style.display = 'none'
    text.value = ''
  }
  function Count(){
    let count = document.getElementById('textarea').value
    let countarea = document.getElementById("count")
    countarea.innerHTML =  count.length+"/300"
    if(count.length >='300'){
      countarea.style.color = 'red'
    }
    else{
      countarea.style.color = ''
    }
  }
  return (
    <div className="App">
        <div className='apphead'>
          <p>TODO</p>
          <abbr title="New Todo">
            <button className="btn" id="add" onClick={enable}>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </abbr>
        </div>
        <div className='appbody container' id='container'>
          
        </div>
        <div className='popuparea' id='popuparea'>
          <p className='titilename'>Todo</p>
          <span className='icon'><i class="fa-solid fa-floppy-disk" onClick={()=>{
            New();
          }}></i><i className="fa-solid fa-xmark" onClick={disable}></i></span>
          <textarea className='textarea' id='textarea' onKeyUp={Count}></textarea>
          <span><p  className='count' id= 'count'>{Count}</p></span>
        </div>
    </div>
  );                                    
}

export default App;


