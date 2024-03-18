import {getKey} from './apikey.js'

// const myKey = getKey()
const baseUrl = 'https://food-recipes-with-images.p.rapidapi.com/';
// https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup'
// const params = new URLSearchParams();

// params.append('q', 'chicken soup');

// const url = `${baseUrl}?${params.toString()}`

// console.log(url)
// try{
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result)
// } catch (error){
//     console.error('Error: ', error)
// }

async function fetchRecipe(userinput){
    let apikey = null;
    try{
        // apikey = await getKey();
        // console.log(apikey)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apikey,
                'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
            }
        };
        const params = new URLSearchParams();

        params.append('q', userinput);
        const url = `${baseUrl}?${params.toString()}`
        console.log(`testing testing: ${url}`)
        const response = await fetch(url, options);
        const results = await response.text();
        console.log(results);
    }catch(error){
        console.error('Error: ', error)
    }
}
fetchRecipe('chicken soup')