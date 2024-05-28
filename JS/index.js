let username;

const button = document.getElementById('mysubmit');
button.addEventListener("click",event=>{
    event.target.style.backgroundColor = 'red';
})

button.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor="green";
})

button.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor='blue';
})


fetch('https://pokeapi.co/api/v2/pokemon/ditto').
    then(response => {
        if(!response.ok) {
            throw new Error('Could not fetch resourse')
        }

        return response.json()
    }).
    then(data => console.log(data)).
    catch(error =>console.error(error));

async function fetchData(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

        if(!response.ok){
            throw new Error('Response did not received')
        }
        const data = await response.json()
        console.log(data)

    }catch(error){

        console.log(error)
    }
}
fetchData();

// document.getElementById('mysubmit').onclick= function(){
//     username = document.getElementById('username').value;
//     console.log(username)
// }

// document.body.style.backgroundColor = "hsl(0%,0%,15%)";
