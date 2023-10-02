// async function getData() {
const getData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

// async function displayUserData() {
const displayUserData = async() => {
    const user = await getData()
    // console.log(user);
    user.forEach(userTableContent)
}
displayUserData()

let tableData = "";
// function userTableContent(value) {
const userTableContent = (value) => {
    tableData += `<tr class="border-b-2 border-black">
    <td class="border-r-4 border-black">${value.id}</td>
    <td class="border-r-4 border-black">${value.name}</td>
    <td class="border-r-4 border-black">${value.email}</td>
    <div class="bg-yellow-500">
    <td class="border-r-4 border-black">
        <a href="todo-list.html">
            <button class="hover:text-purple-900" onclick="localStorage.setItem('user-id', ${value.id})">TODO</button>
        
        </a>
    </td></div>
    <td class="border-r-4 border-black">
        <a href="album.html">
            <button onclick="localStorage.setItem('user-id', ${value.id})">Albums</button>
        </a>
    </td>    
    </tr>`
    document.getElementById("table-body").innerHTML = tableData;
}

// const getUserId = (id) => {
//     console.log(id);
    // localStorage.setItem("user-id", id)
    // console.log(user-id);
    // localStorage["key"] = id;
// }
// getData().then(data => {
//     data;
//     tableData = `<tr class="border-b-2 border-black">
//         <td class="border-r-4 border-black">${values.id}</td>
//         <td class="border-r-4 border-black">${values.name}</td>
//         <td class="border-r-4 border-black">${values.email}</td>
//     </tr>`
//     document.getElementById("table-body").innerHTML = tableData;
// })

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// // .then(json => console.log(json))
// .then((data) => {
//     let tableData="";
//     data.map((values) => {
//         tableData += `<tr class="border-b-2 border-black">
//         <td class="border-r-4 border-black">${values.id}</td>
//         <td class="border-r-4 border-black">${values.name}</td>
//         <td class="border-r-4 border-black">${values.email}</td>
//     </tr>`
//     });
//     document.getElementById("table-body").innerHTML = tableData;
// })

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res => res.json())
// .then((pics) => {
//     let imgData = "";
//     pics.map((values) => {
//         imgData += `<td><img src="${values.url}" alt=""></td>`
//     });
//     document.getElementById("table-body").innerHTML = imgData;
// })

// <td class="border-r-4 border-black"><a href="todo-list.html"><button class="userTodo" onclick="getUserId(${value.id})>TODO</button></a></td>
// <td class="border-r-4 border-black"><a href="todo-list.html"><button >ToDo</button></a></td>