import React from 'react';

function NewsItem({ title, description, url, src }) {
    const cardStyle = {
        width: '20rem',
        height: '25rem', // Adjust the height as needed
    };

    const imgStyle = {
        height: '10rem', // Adjust the height as needed
        objectFit: 'cover',
    };
    const handleError = (e) => {
        e.target.src = 'public/download.png'; // Replace with the path to your default image
    };

    return (
        <div className="card bg-dark text-light mb-3 my-3 mx-3 py-2 px-2 d-inline-block" style={cardStyle}>
             <div className="">
                <img 
                    src={src} 
                    className="card-img-top" 
                    alt='no image found' 
                    style={imgStyle} 
                    onError={handleError} 
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 25)}</h5>
                <p className="card-text">
                    {description ? description.slice(0, 90) : "Lawyers alleged that Google tracked browser usage of customers in “Incognito” mode to measure web traffic and sell ads"}
                </p>
                <a href={url} className="btn btn-light" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
