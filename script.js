let task=[]

function AddTask(){

    let Task=document.getElementById("task").value;
    let Description=document.getElementById("description").value;
   
    let tasks=[
{
task:Task,
description:Description

} ]

task.push(tasks)

let body=`
<tr>
   <td></td>
</tr> `
tasks.forEach(print => {
    body+=`
    <div class="card" style="width: 40rem;border-radius: 10px;margin: 20px;" data-aos="fade-right" >
          <div class="card-body">
            <h5 class="task">${print.task}</h5>
            <p class="description">${print.description}</p>
             <div class="checkbox-wrapper-2">
  <input type="checkbox" class="sc-gJwTLC ikxBAC" id="check">
</div>
          </div>
        </div>
       
    `
});


document.getElementById("card").innerHTML+=body

console.log(task);

console.log(document.getElementById("check").checked);
document.getElementById("check").addEventListener("change",function(){
if(this.checked){
    console.log("Checked");
    
}else{
    console.log("unChecked");
}})

document.getElementById("task").value=""
document.getElementById("description").value=""
}


