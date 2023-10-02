const id_useres = localStorage.getItem('user-id');
if (id_useres) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id_useres}`;
    
    fetch(url)
    .then(response => response.json())  
    .then(data => {
        data.map((value) => {
            let images = document.getElementById('content');
            images.innerHTML += `<div><img src='${value.url}' /><div class="text-3xl">${value.id}</div>`
        })
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {
  console.error('User ID not found in localStorage');
}