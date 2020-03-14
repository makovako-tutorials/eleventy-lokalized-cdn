const axios = require('axios')
require('dotenv').config()

const API_KEY = process.env.NEWS_API_KEY

const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=5`

module.exports = async function() {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}