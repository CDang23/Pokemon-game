//create value
let img1 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/bulbasaur.avif';
let img2 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif';
let img3 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmeleon.avif';
let img4 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/squirtle.avif';
let img5 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/butterfree.avif';
let img6 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/clefairy.avif';
let img7 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/vulpix.avif';
let img8 = 'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif';
let pokemonArr = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8];
let firstClick = null;
let secondClick = null;
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
    img.src = url;
    img.classList.add('border-solid', 'border-2', 'hover:opacity-50')
    pokemonDiv.appendChild(pokemonImgDiv);
    pokemonImgDiv.appendChild(img)


    // tao the img trong the DIV sau do xoa the img di

    //pokemon deleted
    pokemonImgDiv.addEventListener('click', (ev) => {
        pokemonImgDiv.classList.add('opacity-50')

        if (firstClick === null) {
            firstClick = ev.target.src;
        } else if (secondClick === null) {
            secondClick = ev.target.src;
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
            pokemonDiv.querySelectorAll('div').forEach((parameter) => {
                if (parameter.className == 'opacity-50') {
                    parameter.remove(img)
                    parameter.classList.remove('opacity-50');
                    firstClick = null;
                    secondClick = null;
                }
            });


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
