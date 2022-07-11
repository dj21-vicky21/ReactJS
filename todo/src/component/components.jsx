let i = 1
function New(){
    let body = document.getElementById('container')
    let textarea = document.getElementById('textarea')
    let TextareaDisable = document.getElementById('popuparea')
    let add = document.getElementById('add')
    let Box = document.createElement("div")
    let cancel = document.createElement("span")
    let icon = document.createElement("i")
    let countarea = document.getElementById("count")
    countarea.innerHTML = "" 
    if(textarea.value.length !== 0 && textarea.value.length <= 300){
      icon.setAttribute('class','fa-solid fa-xmark')
      icon.setAttribute('id','icon'+i)
      Box.setAttribute('class','box')
      Box.setAttribute("id","box"+i)
      icon.setAttribute('onclick',`document.getElementById("box`+i+`").remove()`)
      Box.setAttribute("onclick",`
      if(this.style.textDecoration !== 'line-through'){
        this.style.textDecoration = 'line-through'
        this.style.backgroundColor = "#f9629e46"
        this.style.color = "#eec0c8"
      }
      else{
        this.style.textDecoration = 'none'
        this.style.backgroundColor = "#eec0c8"
        this.style.color = "#F9629F"
        
        
      }
      `)
      cancel.appendChild(icon)
      Box.appendChild(cancel)
      Box.append(textarea.value)
      body.appendChild(Box)
      TextareaDisable.style.display = 'none'
      add.style.display = 'block'
      i++
    }
    
  }

export {New}




