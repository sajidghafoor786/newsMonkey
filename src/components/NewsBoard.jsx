import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c1dc65884e7c4719b1ba6311b51504c6`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, [category]);

    return (
        <div className=''>
            <h1 className="text-center">Latest <span className="badge bg-danger ">New</span></h1>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

export default NewsBoard;
