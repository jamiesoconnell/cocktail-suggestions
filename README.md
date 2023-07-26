# Cocktail Suggestion APP
This cocktail app allows users to explore and discover classic cocktail recipes. Users can either click the "Surprise me" button to get a random cocktail recipe or use the search bar to look up a specific cocktail. The app fetches data from an external API to display cocktail details, including ingredients and preparation instructions. It provides a simple and enjoyable way to learn about and enjoy a variety of classic cocktails.

**Link to project:** https://drinksuggestions.netlify.app/

![A Screengrab of the cocktail suggestion app title with search bar.](<js/Screenshot 2023-07-26 at 4.53.08 PM.png>)
## How It's Made:

**Tech used:** HTML, CSS, JavaScript, External API, Google Fonts

The foundation of the app was laid down using HTML. CSS was used to apply styles and layout to the HTML elements. The app utilizes an external API from thecocktaildb.com to fetch cocktail data. Two functions are defined, getFetch() and searchBar(), to handle the API requests based on user interactions. JavaScript is used to add interactivity to the app. Event listeners are set up for the "Surprise me" button and the search button. When clicked, these buttons trigger the respective functions (getFetch() and searchBar()) to fetch cocktail data from the API and update the DOM with the retrieved information. The fetched data is then displayed on the web page using DOM manipulation. The app updates the cocktail name, image, ingredients, and preparation instructions based on the API response.

## Lessons Learned:

This was my first app built that integrated an external API. I got to learn how to make HTTP requests, handle API responses (JSON parsing), and deal with potential errors that might occur during API interactions. Building an interactive web app involved updating the DOM dynamically. It was awesome to see how I could manipulate DOM elements using JavaScript to reflect changes based on user actions or API responses.  Working with asynchronous JavaScript is challenging but as I get confident with Promises and async/await I can see the value to achieve smooth app functionality, especially when dealing with API requests.


