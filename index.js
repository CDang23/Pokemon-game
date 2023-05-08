//create value
let img1 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/bulbasaur.avif';//#001
let img2 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/wartortle.avif';//008
let img3 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/beedrill.avif';//015
let img4 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/beedrill.avif';//022
let img5 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/ivysaur.avif';//002
let img6 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/blastoise.avif';//009
let img7 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgey.avif';//016
let img8 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif';//023
let img9 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/venusaur.avif';//003
let img10 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/caterpie.avif';//010
let img11 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgeotto.avif';//017
let img12 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/arbok.avif';//024
let img13 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif';//004
let img14 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/metapod.avif';//011
let img15 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgeot.avif';//018
let img16 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif';//025
let img17 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif';//004
let img18 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/metapod.avif';//011
let pokemonArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];
let firstClick = null;
let secondClick = null;
let firstClass = '';
let secondClass = '';
let numDiv = 0;
const resetBtn = document.getElementById('resetBtn');
const pokemonShuffleArray = shuffleArray(pokemonArr)
const pokemonDiv = document.getElementById('pokemon');


//reset button created
resetBtn.addEventListener('click', () => {
    location.reload();
})

//array for each to create a img tag
pokemonShuffleArray.forEach((url) => {
    const pokemonImgDiv = document.createElement('div');
    const img = document.createElement('img');
    numDiv = numDiv + 1;// tao bien dem cho cac the img dua vao
    img.classList.add(numDiv, 'border-solid', 'border-2', 'hover:opacity-50');
    img.src = url;
    pokemonDiv.appendChild(pokemonImgDiv);
    pokemonImgDiv.appendChild(img);


    //pokemon deleted
    pokemonImgDiv.addEventListener('click', (ev) => {
        pokemonImgDiv.classList.add('opacity-50')

        if (firstClick === null) {
            firstClick = ev.target.src;
            firstClass = ev.target.className;

        } else if (secondClick === null) {
            secondClick = ev.target.src;
            secondClass = ev.target.className;

        }
        if (firstClick !== secondClick && secondClick !== null) {
            firstClick = null;
            secondClick = null;
            pokemonDiv.querySelectorAll('div').forEach((parameter) => {
                if (parameter.className == 'opacity-50') {
                    parameter.classList.remove('opacity-50');
                }
            });
        } else if (firstClick === secondClick) {
            if (firstClass == secondClass) {
                firstClick = null;
                secondClick = null;
                pokemonImgDiv.classList.remove('opacity-50');
            } else {
                pokemonDiv.querySelectorAll('div').forEach((parameter) => {
                    if (parameter.className == 'opacity-50') {
                        parameter.innerHTML = "";
                        parameter.classList.add('border-solid', 'border-2', 'h-[calc(384px/6)]', 'w-[calc(384px/6)]');
                        firstClick = null;
                        secondClick = null;
                    }

                });
            }


        }
    })
})

//shuffle array function create 
function shuffleArray(array) {
    const copyArr = [...array]; // create a new array with the same elements as the original array
    for (let i = copyArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]; // swap elements at indices i and j
    }
    return copyArr;
}
