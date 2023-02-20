let addItenButton = document.getElementById("addIten");
let resetAllButton = document.getElementById("resetALL");
let addTasksInput = document.getElementById("addTasks");
let tasksConteiner = document.getElementById("tasksConteiner");

let i = 0;
addItenButton.addEventListener("click",function(){
    if(addTasksInput.value == "") {
        alert("não tem nenhuma tarefa para ser adicionada");
    }else { 
            var NewTask = document.createElement("input");
                NewTask.setAttribute("id",`NewTask${i}`);
                NewTask.setAttribute("class","ClassNewTask");
                NewTask.setAttribute("disabled","");
                NewTask.value = addTasksInput.value;
            
            var subcontainer = document.createElement("div");
                subcontainer.setAttribute("id",`subContainer${i}`);
                subcontainer.setAttribute("class","subContainers");

        subcontainer.appendChild(NewTask);

            var taskEdit = document.createElement("button");
                taskEdit.setAttribute("id",`taskEdit${i}`);
                taskEdit.setAttribute("class","ClasstaskEdit");
                    var imageEdit = document.createElement("img");
                        imageEdit.setAttribute("src","./images/botao-editar.png");
                        imageEdit.setAttribute("width","20px");
                        

        taskEdit.appendChild(imageEdit);
        subcontainer.appendChild(taskEdit);

            var taskRemove = document.createElement("button");
                taskRemove.setAttribute("id",`TaskRemove${i}`);
                taskRemove.setAttribute("class","classTaskRemove");
                    var imageRemove = document.createElement("img");
                        imageRemove.setAttribute("src","./images/remover.png");
                        imageRemove.setAttribute("width","20px");
                        

        taskRemove.appendChild(imageRemove);
        subcontainer.appendChild(taskRemove);
    
        tasksConteiner.appendChild(subcontainer);
        addTasksInput.value = "";


            taskEdit.addEventListener("click",function() {
                NewTask.removeAttribute("disabled");
                    NewTask.addEventListener("change",function() {
                        NewTask.setAttribute("disabled","");
                    });
            });

            taskRemove.addEventListener("click",function() {
                subcontainer.removeChild(taskEdit);
                subcontainer.removeChild(taskRemove);
                subcontainer.removeChild(NewTask);
            }); 

            resetAllButton.addEventListener("click",function() {
                tasksConteiner.innerHTML = "";
            });
        i++
        }
});
