"use strict"

window.onload = function () {
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let tasklist = document.getElementById('tasklist')
    let deleteCompleted = document.getElementById('deleteCompleted')
    let Sort = document.getElementById('Sort')

    

    addtask.onclick = function () {
        let start = new Date().getTime()

        let task = newtask.value
        if(!task){
          return
        }
          
        let listitem = CreateListItem(task)
        tasklist.appendChild(listitem)
      
        console.log(new Date().getTime() - start)
        DisableButtons()
    }

    deleteCompleted.onclick = function() {
        let completedTasks = document.getElementsByClassName('strike')
        if(completedTasks.length == 0){
          return
        }

        let parent = completedTasks[0].closest('#tasklist')

        let length = completedTasks.length
        for(let i = 0; i < length; i++){
          parent.removeChild(completedTasks[0].closest('.list-group-item'))
        }
        DisableButtons()
    }

    Sort.onclick = function() {
      let newtasklist = document.createElement("div")
      newtasklist.id = "tasklist"
      newtasklist.className = "list-group"

      let tasks = tasklist.children
      let tasksArr = []
      let length = tasks.length
      for(let i = 0; i < length; i++){
        tasksArr.push(tasks[i])
      }

      let completedTasks = []
      let notCompletedtasks = []
      for(let i = 0; i < length; i++){
        let itemChildren = tasksArr[0].children
        if(itemChildren[0].className == "strike"){
          completedTasks.push(tasksArr.shift())
        }
        else{
          notCompletedtasks.push(tasksArr.shift())
        }
      }

      let numNotCompletedTasks = notCompletedtasks.length;
      for(let i = 0; i < numNotCompletedTasks; i++){
        newtasklist.appendChild(notCompletedtasks.shift())
      }

      let numCompletedTasks = completedTasks.length;
      for(let i = 0; i < numCompletedTasks; i++){
        newtasklist.appendChild(completedTasks.shift())
      }

      let listholder = document.getElementById('list-holder')
      listholder.replaceChild(newtasklist, tasklist)
      tasklist = document.getElementById('tasklist')
      DisableButtons()
    }
    
    function CreateListItem(task){
        let listitem = document.createElement('div')
        listitem.className += "d-flex list-group-item justify-content-between"
        
        let span = document.createElement("span")
        span.innerText = task
        
        let checkbox = CreateCheckBox()

        let buttongroup = document.createElement('div')
        buttongroup.className += "btn-group mr-2"
        
        let iconup = document.createElement('i')
        iconup.className += "fas fa-chevron-up"
        let upbutton = CreateIconButton(iconup)
        upbutton.setAttribute("onclick", "MoveUp(this)")
        upbutton.className += " moveup"

        let icondown = document.createElement("i")
        icondown.className += "fas fa-chevron-down"
        let downbutton = CreateIconButton(icondown)
        downbutton.setAttribute("onclick", "MoveDown(this)")
        downbutton.className += " movedown"

        let icondelete = document.createElement("i")
        icondelete.className += "fas fa-trash-alt"
        let delbutton = CreateIconButton(icondelete)
        delbutton.setAttribute("onclick", "DeleteTask(this)")
        
        
        buttongroup.appendChild(checkbox)
        buttongroup.appendChild(upbutton)
        buttongroup.appendChild(downbutton)
        buttongroup.appendChild(delbutton)
        
        listitem.appendChild(span)
        listitem.appendChild(buttongroup)
        
        return listitem
    }
  }

  function DisableButtons(){
    let upButtons = document.getElementsByClassName("moveup")
    if(upButtons.length > 0){
      upButtons[0].setAttribute("disabled", "disabled")
      let length = upButtons.length
      for(let i = 1; i < length; i++){
        if(upButtons[i].hasAttribute("disabled")){
          upButtons[i].removeAttribute("disabled")
        }
      }
    }

    let downButtons = document.getElementsByClassName("movedown")
    if(downButtons.length > 0){
      downButtons[downButtons.length - 1].setAttribute("disabled", "disabled")
      let length = downButtons.length
      for(let i = length - 2; i >= 0; i--){
        if(downButtons[i].hasAttribute("disabled")){
          downButtons[i].removeAttribute("disabled")
        }
      }
    }
  }

  function CreateButton(){
    let button = document.createElement("button")
    button.className += "btn btn-outline-secondary mr10 noborder"
    button.setAttribute("type", "button")
    return button
  }

  function CreateIconButton(icon){
    let iconbutton = CreateButton()
    iconbutton.appendChild(icon)
    return iconbutton
  }

  function CreateCheckBox(){
    let div1 = document.createElement('div')
    div1.className += "input-group-prepend"

    let div2 = document.createElement("div")
    div2.className += "input-group-text mr10"

    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "Strike(this)")

    div2.appendChild(checkbox)
    div1.appendChild(div2)
    return div1

  }

  function DeleteTask(task){
    task.closest('#tasklist').removeChild(task.closest('.list-group-item'))
    DisableButtons()
    return;
  }

  function MoveUp(task){
    SwapTasks(task.closest('.list-group-item'), task.closest('.list-group-item').previousSibling)
    DisableButtons()
  }

  function MoveDown(task){
    SwapTasks(task.closest('.list-group-item'), task.closest('.list-group-item').nextSibling)
    DisableButtons()
  }

  function SwapTasks(task1, task2){
    if(task1.nextSibling == task2){
      task1.parentNode.insertBefore(task2, task1)
    }
    else{
      task2.parentNode.insertBefore(task1, task2)
    }
  }

  function Strike(checkbox){
    let listitem = checkbox.closest('.list-group-item')
    if(listitem.firstChild.className == "strike"){
      listitem.firstChild.className = ""
    }
    else{
      listitem.firstChild.className += "strike"
    }
  }
