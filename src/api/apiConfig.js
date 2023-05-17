const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'1ae5d417c517730bfe04d817bad500db',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;