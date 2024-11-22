const movies = [
    {
        title: "Inception",
        poster: "images.jpg",
        rating: 4.5,
        link: "https://www.imdb.com/title/tt1375666/"
    },
    {
        title: "The Dark Knight",
        poster: "joker.jpg",
        rating: 5,
        link: "https://www.imdb.com/title/tt0468569/"
    },
    {
        title: "Intersteller",
        poster: "in.jpg",
        rating: 4.8,
        link: "https://www.imdb.com/title/tt0816692/"
    },
    {
        title: "Deadpool & Wolverin",
        poster: "d&w.jpg",
        rating: 4.5,
        link: "https://www.imdb.com/title/tt6263850/"
    },
    {
        title: "The Avengers",
        poster: "the.jpg",
        rating: 4,
        link: "https://www.imdb.com/title/tt0848228/"
    },
    {
        title: "Avengers Age Of Ultron",
        poster: "age.webp",
        rating: 4.3,
        link: "https://www.imdb.com/title/tt2395427/"
    },
    {
        title: "Avengers Infinity War",
        poster: "ave.jpg",
        rating: 4.7,
        link: "https://www.imdb.com/title/tt4154756/"
    },
    {
        title: "Avengers Endgame",
        poster: "aveng.jpg",
        rating: 5,
        link: "https://www.imdb.com/title/tt4154796/",
    },
    {
        title: "Kalki 2898 AD",
        poster: "kal.jpg",
        rating: 4.7,
        link: "https://www.imdb.com/title/tt12735488/",
    },
    {
        title: "Stree",
        poster: "stree.jpg",
        rating: 4.2,
        link: "https://www.imdb.com/title/tt8108202/",
    },
    {
        title: "Stree 2",
        poster: "stree2.jpg",
        rating: 4.8,
        link: "https://www.imdb.com/title/tt27510174/",
    },
    {
        title: "Bhediya",
        poster: "bhed.jpg",
        rating: 3.9,
        link: "https://www.imdb.com/title/tt14099334/",
    },
    {
        title: "Munjya",
        poster: "munjya.jpg",
        rating: 4.1,
        link: "https://www.imdb.com/title/tt27995594/",
    },  
    {
        title: "Farzi",
        poster: "farzi.jpg",
        rating: 4.3,
        link: "https://www.imdb.com/title/tt15477488/",
    },
    {
        title: "Taaza Khabar-Season 1",
        poster: "taa.jpg",
        rating: 4.4,
        link: "https://www.imdb.com/title/tt22014226/",
    }, 
    {
        title: "Taaza Khabar-Season 2",
        poster: "taazaa.jpg",
        rating: 4.7,
        link: "https://www.imdb.com/title/tt22014226/",
    },
    {
        title: "Jatt Brothers",
        poster: "jatt.jpg",
        rating: 3.3,
        link: "https://www.imdb.com/title/tt17278510/",
    },
    {
        title: "Jatt and Juliet",
        poster: "jul.jpg",
        rating: 4,
        link: "https://www.imdb.com/title/tt2196254/",
    },
    {
        title: "Jatt and Juliet 2",
        poster: "juli.jpg",
        rating: 3.9,
        link: "https://www.imdb.com/title/tt2673882/",
    },
    {
        title: "Jatt and juliet 3",
        poster: "juliet.jpg",
        rating: 4.2,
        link: "https://www.imdb.com/title/tt29063558/",
    },
    {
        title: "KGF-Chapter 1",
        poster: "kgf.jpg",
        rating: 4.3,
        link: "https://www.imdb.com/title/tt7838252/",
    },
    {
        title: "KGF-Chapter 2",
        poster: "kgfc.jpg",
        rating: 4.5,
        link: "https://www.imdb.com/title/tt10698680/",
    },
    {
        title: "Bahubali-The Beginning",
        poster: "bah.jpg",
        rating: 4.1,
        link: "https://www.imdb.com/title/tt2631186/",
    },
    {
        title: "Bahubali-The conclusion",
        poster: "bahu.jpg",
        rating: 4.4,
        link: "https://www.imdb.com/title/tt4849438/",
    },
    {
        title: "Money Heist-Drama series",
        poster: "mo.jpg",
        rating: 4.5,
        link: "https://www.imdb.com/title/tt6468322/",
    },
    {
        title: "Wednesday",
        poster: "wed.jpg",
        rating: 4.2,
        link: "https://www.imdb.com/title/tt13443470/",
    },
    {
        title: "Squid Game",
        poster: "sq.jpg",
        rating: 4,
        link: "https://imdb.com/title/tt10919420/",
    },
    {
        title: "The Boys",
        poster: "boys.jpg",
        rating: 4.7,
        link: "https://www.imdb.com/title/tt1190634/",
    },
    // More movies can be added here
];

// Function to display movies
function displayMovies(filteredMovies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear the movie list before displaying new movies

    filteredMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.rating} / 5</p>
            <a href="${movie.link}" target="_blank">View More</a>
        `;

        movieList.appendChild(movieItem);
    });
}

// Search functionality
function searchMovies() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

// Initial load
displayMovies(movies);
