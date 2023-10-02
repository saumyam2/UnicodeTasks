const id_useres = localStorage.getItem('user-id');
console.log(id_useres)
if (id_useres) {
    const url = `https://jsonplaceholder.typicode.com/todos?userId=${id_useres}`;

    fetch(url)
    .then(response => response.json())    
    .then(data => {
        let tableData= "";
        data.map((value) => {
            tableData += `<tr class="border-b-2 border-black">
            <td class="border-r-4 border-black">${value.id}</td>
            <td class="border-r-4 border-black">${value.title}</td>
            <td class="border-r-4 border-black">${value.completed}</td>
            <td class="border-r-4 border-black"><button class="bg-black" onclick="localStorage.setItem('id-edit', ${value.id})">Edit</button></td>
            <td class="border-r-4 border-black"><a href="#"><button onclick="localStorage.setItem('id-delete', ${value.id}), del_alert()">X</button></a></td>
            </tr>`
        })
        document.getElementById("table-body").innerHTML = tableData;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {
  console.error('User ID not found in localStorage');
}

const del_alert = () => {
  alert("Are you sure you want to delete?");
  //DELETE request
  const id_del = localStorage.getItem('id-delete');
  const url_del = `https://jsonplaceholder.typicode.com/todos/22`
  fetch(url_del , {
    method: 'DELETE',
  });
  console.log("Deleted");

}

//PATCH REQUEST
const id_patch = localStorage.getItem('id-edit');
const url_patch = `https://jsonplaceholder.typicode.com/todos/21}`;
fetch(url_patch, {
  method: 'PATCH',
  body: JSON.stringify({
    completed: 'true',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => console.log(json));



// const displayTodo = async() => {
//     const task = await getTodo()
//     // console.log(task);
//     task.forEach(todoContent)
// }
// displayTodo()

// let tableData = "";
// const todoContent = (value) => {
//     tableData += `<tr class="border-b-2 border-black">
//     <td class="border-r-4 border-black">${value.id}</td>
//     <td class="border-r-4 border-black">${value.title}</td>
//     <td class="border-r-4 border-black">${value.completed}</td>
//     <td class="border-r-4 border-black"><a href="todo-list.html"><button>Edit</button></a></td>
//     <td class="border-r-4 border-black"><a href="#"><button>X</button></a></td>
//     </tr>`
//     document.getElementById("table-body").innerHTML = tableData;
// }