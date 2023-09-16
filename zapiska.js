// создаем масив, и инпут
const inputTask = document.getElementById('task-input');
let TODOARRAY = []

// функция очищения taskList после ввода
function cldiv() {
  document.getElementById("taskList").innerHTML = '';
  
}

// отрисовка массива в DOM
function render () {
    cldiv()
    TODOARRAY.forEach((el) => {
        let firstElem = document.createElement("li");

        // блок который относится к созданию чекбокса
        let newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.id = el.id
        if(el.status) {
          newCheckBox.setAttribute('checked', 'true');
        }
        firstElem.appendChild(newCheckBox)
        
        let textToList = document.createTextNode(el.text);
        // добавляем дочерний элемент внутрь основного (firstElem родитель)
        firstElem.appendChild(textToList);
        
        let closeBtnForOne = document.createElement('button')
        closeBtnForOne.textContent = 'x'
        closeBtnForOne.type = 'checkbox' 
        closeBtnForOne.id = el.id
        if(el) {
          closeBtnForOne.setAttribute('delete', 'el')
        }
        firstElem.appendChild(closeBtnForOne)
        

        
        
        

        let list = document.getElementById("taskList");
        
        if ( el.status == true) {
          firstElem.classList.add("perecherkuvanue");
      
           
        } else {
          firstElem.classList.remove("perecherkuvanue");
        }
        // в элемент list добавляется готовый элемент
        list.appendChild(firstElem);


       
  });
}

// если пустое поле в инпуте, и пытаются нажать на кнопку добавить, то в консол выведет stop
function addTask () {   
  if ( inputTask.value == '' ) {
    console.log('stop')
    return 
  }                  
 // формирование замечания и добавление в массив
  let value = inputTask.value;
  
  const element = { 
   id: Date.now(),
   text: value,
   status: false
  }
  
  TODOARRAY.push(element)
  inputTask.value = '';    // очищение инпута!!!
  
}
// let closeBtnForOne = document.querySelector("#closeBtnForOne");
//   closeBtnForOne.addEventListener('click', function() {
//   let close = document.createElement('close');
//   if(TODOARRAY) {
//     newCheckclose.setAttribute('checked', 'true');
    
//   }
// })



let butndelete = document.querySelector("#butndelete")                                        
butndelete.addEventListener('click', function() {
    const result = TODOARRAY.filter(el => {
    return el.status == false
    
  })
  TODOARRAY = result
  render()
})


let butnAdd = document.querySelector("#butnAdd")
butnAdd.addEventListener('click', function() {
  addTask()
  render()
})

 // что бы по нажатию enter добавлялась таска
  document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      addTask()
      render()
}
  });
 // перечеркиваем отмеченное 
 document.addEventListener('click', function(event) {
  TODOARRAY.map((el) => {
      if(event.target.id == el.id) {
          if(el.status == false) {
              el.status = true 
              return
          }
      }
// отменяем перечеркивание
        if(event.target.id == el.id) {
            if(el.status == true) {
                el.status = false
                return
            }
        }
     
     
      
        
         
      })
    render()
})

  


























































