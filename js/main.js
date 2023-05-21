//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.searchButton').addEventListener('click', searchBar)

function getFetch(){
  const choice = document.querySelector('.surpriseButton').value
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  document.querySelector('.drinkIngredients').innerText = ''


  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.drinkName').innerText = "~" + data.drinks[0].strDrink + "~" 
       
        for (let i = 1; i < 15; i++) {
          const ingredient = data.drinks[0][`strIngredient${i}`];
        
          if (ingredient) {
            const ingredientElement = document.createElement('p');
            ingredientElement.innerText = ingredient;
        
            const drinkIngredientsContainer = document.querySelector('.drinkIngredients');
            drinkIngredientsContainer.appendChild(ingredientElement);
          }
        }
        document.querySelector('.drinkInstructions').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    }
  function searchBar(url){
        const choice = document.querySelector('.searchInput').value
        let url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`
        document.querySelector('.drinkIngredients').innerText = ''
      
        
        fetch(url2)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              document.querySelector('img').src = data.drinks[0].strDrinkThumb
              document.querySelector('.drinkName').innerText = "~" + data.drinks[0].strDrink + "~"
             
              for (let i = 1; i < 15; i++) {
                const ingredient = data.drinks[0][`strIngredient${i}`];
              
                if (ingredient) {
                  const ingredientElement = document.createElement('p');
                  ingredientElement.innerText = ingredient;
              
                  const drinkIngredientsContainer = document.querySelector('.drinkIngredients');
                  drinkIngredientsContainer.appendChild(ingredientElement);
                }
              }
              document.querySelector('.drinkInstructions').innerText = data.drinks[0].strInstructions
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

          }
