let newtask = document.getElementById('newtask')
let addtask = document.getElementById('addtask')
let tasklist = document.getElementById('tasklist')

addtask.onclick = function () {
  let task = newtask.value
//   console.log(typeof +task)
//   console.log(+task)
//   if(typeof task == 'number'){
//       console.log("Not NaN")
    //   for(let i = 1; i <= task; i++){
    //       tasklist.innerHTML += "<li>" + i + "</li>"
    //   }





    //   SM'
    // let arr = []
    // for(let i = 1; i <= task; i++){
    //     let item = document.createElement('li');
    //     // arr.push(item);
    //     item.innerText = i
    //     tasklist.appendChild(item);
    // }





    //SM2

    let newtasklist = document.createElement('ul');
    newtasklist.id = 'tasklist'
    for(let i = 1; i <= task; i++){
        let item = document.createElement('li');
        // arr.push(item);
        item.innerText = i
        newtasklist.appendChild(item);
    }
    document.body.replaceChild(newtasklist, tasklist)
//   }
//   else{
//       console.log("running")
//       tasklist.innerHTML += "<li>" + task + "</li>"
//   }
}