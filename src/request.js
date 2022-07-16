const API_KEY = "8e0168a457aaa1820c09ae8a2ac1ce69";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=2`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=878&page=2`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35&page=4`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749&page=18`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99&page=14`,
}

export default requests;