function getData() {
      const main = document.getElementById('main');
      main.innerHTML="";
      fetch("http://localhost:3000/games", requestOptions)
            .then(response => response.json())
            .then(result => {
                  result.map(x => {
                        const main = document.getElementById('main')
                        main.innerHTML += `
                        <div class="games" style="background-color: ${x.color}"> 
                        <h1 class="title${x.count}">${x.short}</h1>
                        <img src="${x.img}" alt="247" style="width:420px;height:100px;">
                        <p class="title${x.count} align">Likes: ${x.like}</p>
                        <a class="title" target="_blank" href=${x.link}>link</a>
                        <button onclick="like(${x.count})" class="button${x.count - 1}">Like</button>
                        </div>`
                  })
                  //                   <h1 class="title3 ">2. Addicting Games. Best For: Single-player games.</h1>
                  //   <img src="addicting games.png" alt="AG" style="width:600px;height:100px;"> <h1 class="title3 ">(Link: https://www.addictinggames.com/)</h1>
                  //   <h1 class="title4 ">3. Agame. Best For: Games on multiple devices, single and multi-player online games </h1>
                  //   <img src="agame.png" alt="agame"style="width:600px;height:100px;"> <h1 class="title4 ">(Link: https://www.agame.com/)</h1>
            })
            .catch(error => console.log('error', error));
}
var requestOptions = {
      method: 'GET',
      redirect: 'follow'
};

const like = async (count) => {
      const option = {
            method: 'PUT',
            redirect: 'follow',
            headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({count:count})
      }
      await fetch("http://localhost:3000/games", option);
      getData();
}