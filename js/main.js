//two event listeners. One for random and one for a specific search
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.searchButton').addEventListener('click', searchBar)


//Function to fetch a random cocktail
function getFetch(){
  const choice = document.querySelector('.surpriseButton').value
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  document.querySelector('.drinkIngredients').innerText = ''  // Clear the text content of the element with class 'drinkIngredients'


  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.drinks[0].strDrinkThumb  // Set the 'src' attribute of the 'img' element to the URL of the cocktail image
        document.querySelector('.drinkName').innerText = "~" + data.drinks[0].strDrink + "~"  // Set the text with class 'drinkName' to cocktail name
       

         // Loop through the cocktail ingredients and create <p> elements for each ingredient
        for (let i = 1; i < 15; i++) {
          const ingredient = data.drinks[0][`strIngredient${i}`];
        
          if (ingredient) {  // Check if the ingredient exists
            const ingredientElement = document.createElement('p');
            ingredientElement.innerText = ingredient;
        
            const drinkIngredientsContainer = document.querySelector('.drinkIngredients');
            drinkIngredientsContainer.appendChild(ingredientElement);
          }
        }
        document.querySelector('.drinkInstructions').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
        // If an error occurs during the fetch, log the error message to the console for debugging.
          console.log(`error ${err}`)
      });

    }

    //fuction to search based on a users input.
  function searchBar(url){
        const choice = document.querySelector('.searchInput').value //takes the value of whats typed
        let url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}` //creates a URL
        document.querySelector('.drinkIngredients').innerText = ''//clears the last drink
      
        
        fetch(url2)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              document.querySelector('img').src = data.drinks[0].strDrinkThumb // adds the photo to the img space
              document.querySelector('.drinkName').innerText = "~" + data.drinks[0].strDrink + "~" //adds the drink name
             
              for (let i = 1; i < 15; i++) {
                const ingredient = data.drinks[0][`strIngredient${i}`];
              
                if (ingredient) { //loops through and creates a new <p> ingredient if it finds one
                  const ingredientElement = document.createElement('p');
                  ingredientElement.innerText = ingredient;
              
                  const drinkIngredientsContainer = document.querySelector('.drinkIngredients');
                  drinkIngredientsContainer.appendChild(ingredientElement); // This will add the ingredient text as a new paragraph within the 'drinkIngredientsContainer'.
                }
              }
              document.querySelector('.drinkInstructions').innerText = data.drinks[0].strInstructions
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

          }
