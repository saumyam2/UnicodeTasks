const id_useres = localStorage.getItem('user-id');
// const imgContainer = document.getElementById('img-container');
// const actImg = document.getElementById('actual-image');

console.log(id_useres)

// if (id_useres) {
//       const url = `https://jsonplaceholder.typicode.com/photos?userId=${id_useres}`;
// fetch(url)
// .then(response => response.json())  
// .then(data => {
//   photos.innerHTML += `<div><img src='${data.url}</div>`;
//     })
//     .catch(error => {
//   // console.error("Error fetching data:", error);
// });
// } else {
//   console.error('User ID not found in localStorage');
//   }
    
    
    // document.getElementById('actual-image').src = data.url;
    // document.getElementById('img-container').style.display = 'block';
    // console.log(data);
    // document.getElementById("images").innerHTML += `<div> <img src='${value.url}' /> </div>`



if (id_useres) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id_useres}`;
    
    fetch(url)
    .then(response => response.json())  
    .then(data => {
      let ele = 0;
        let tableData= "";
          for (let i=0; i<10; i++){
            tableData += `<tr>`
            for (let j=0; j<5; j++){
                  tableData += `<td class="my-5"><img src='${data[ele].url}' />${data[ele]["id"]}</td>`
                  ele++
            }
            tableData += `</tr>`
          } 
        
        document.getElementById("table-body").innerHTML = tableData;
    })
        
        
        // document.getElementById('actual-image').src = data.url;
        // document.getElementById('img-container').style.display = 'block';
        // console.log(data);
        // document.getElementById("images").innerHTML += `<div> <img src='${value.url}' /> </div>`
    
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {
  console.error('User ID not found in localStorage');
}