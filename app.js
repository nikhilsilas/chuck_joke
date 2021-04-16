console.log("It works");

const getJoke = document.querySelector('.getChuckJoke');
const getJokeSpan = document.querySelector('.getChuckJokespan');
const chuckJokeHolder = document.querySelector('.chuckJoke p b')
const loader = document.querySelector('.loader');



async function fetchChuckJoke(){
    // turn loader on
    loader.classList.remove('hidden');
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json();
    // turn the loader off
    loader.classList.add('hidden');
    return data;
};

async function handleClick(){
    const { value } = await fetchChuckJoke();
    console.log(value);
    chuckJokeHolder.textContent = value;
    
};

getJoke.addEventListener('click', handleClick)



