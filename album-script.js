const id_useres = localStorage.getItem('user-id');
if (id_useres) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id_useres}`;
    
    fetch(url)
    .then(response => response.json())    
    .then(data => {
        let tableData= "";
        data.map((value) => {
            tableData += `<tr class="border-b-2 border-black">
            <td class="border-r-4 border-black">${value.id}</td>
            <td class="border-r-4 border-black">${value.title}</td>
            <td class="border-r-4 border-black">
                <a href="photos-2.html">
                    <button onclick="localStorage.setItem('user-id', ${value.id})">Photos</button>
                </a>
            </td>
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

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data =>{
//     data.forEach((user) => {
//     let image=document.getElementById("img-content");
//     image += ``;
//     })
// })

// const getImg = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const data = await response.json();
//     return data;
// }
// const displayUserImg = async() => {
//     const user = await getImg()
//     // console.log(user);
//     user.forEach(userTableContent)
// }
// displayUserData()
// const userTableContent = (value) => {
//     let image = document.getElementById("image").innerHTML = tableData;
// }