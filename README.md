# Netflix GPT

- I have created it using vite. It is purely a React Project to run this project on your local machine you can clone this first and then run the script npm start to run the project. Then go on your browser and visit http://localhost:5173/ to see the website. I have used firebase for authentication, so you need to make an account and then you will be able to access the website.

After creating your account you will be able to see list of movies and then you can also access a very cool feature of this project which i have built using Gemini API's by clicking Gpt search button on the header you ask for movie suggestions from the gemini by just typing the genre you need to watch. but before that you need to generate an API key for gemini from google ai studio website - https://aistudio.google.com/app/apikey

then you need to copy the generated key inside the API key input box and hit enter then enter the genre in the what do you want to watch today input box and hit search. it will suggest you the desired movies. 


# Features / Skeleton of Project
- Login/Signup 
   - SignIn/SignUp Form
   - redirect to Browse Page
- Browse (after Login authentication)
   - Header
   - Main Movie
      - Trailer in Background
      - Title and Description
      - Movie Suggestions
         - MovieLists * N (horizontally scrollable)
- Netflix GPT
    - Search Bar
    - Movie Suggestions


