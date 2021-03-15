

//////////////////////////////////////////////////////////////
//TASK2
// async function t(){
//     var res = await fetch("https://jsonplaceholder.typicode.com/users");
//     var users = await res.json();
//     for(let i=0;i<users.length;i++){
//        // console.log(users[i].name);
//         cont.innerHTML+=`<button onclick="test()";class="btn" style="background-color:rgba(205, 139, 221, 0.782); padding:10px ; margin:1px" > ${users[i].name}</button>`;


//     }
   

//      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);

// }
// t();
////////////////////////////////////////////////////////////////////////////////////

 var cont =document.querySelector("#container");
 var pot =document.querySelector("#pot");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((data) => {
    for(let i=0;i<data.length;i++){
               // console.log(users[i].name);
      cont.innerHTML+=`<button onclick="test(${data[i].id})";class="btn" style="background-color:rgba(205, 139, 221, 0.782); padding:10px ; margin:5px" > ${data[i].name}</button>`;
        
        
            }
}
)


async function test(id){
   // console.log(id)
  try{
    var posts = await  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    var usersposts = await posts.json();
    console.log(usersposts);
    pot.innerHTML=" ";
    for(let i=0;i<usersposts.length;i++){
    
        pot.innerHTML+=`<br><span >** ${usersposts[i].body}</span><hr>`;}
  
  }  

  catch(e){
    console.log(e);
  }
}

