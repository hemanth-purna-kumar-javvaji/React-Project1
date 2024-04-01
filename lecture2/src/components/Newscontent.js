import React, { useState,useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import altimg from './alternateimg.webp';
import './Newscontent.css';
import Loader from './Loader';

function Newscontent({ category1, setprogress }) {
    const [news, setNews] = useState([]); // to store the fetched data from the API
    const [page, setPage] = useState(1); // for page size
    const [isLoading, setIsLoading] = useState(true); // for loader and infinite scroll bar
    const pageSize = 5;
    async function getNews() {
        try {
            let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category1}&apiKey=710df97934144ae89d99ef526d10d90c&page=${page}&pageSize=${pageSize}`);
            let finalNewsData = await newsData.json();
         
            if (finalNewsData.articles && finalNewsData.articles.length > 0) {
                setprogress=30;   // Update loading progress
                setNews(prevNews => [...prevNews, ...finalNewsData.articles]);
            } else {
                console.log("No articles found");
            }
        } catch (error) {
            console.log("Fetching error", error);
        } finally {
            setIsLoading(false);
            setprogress=100; // Update loading progress
        }
    }

    useEffect(() => {
        // Fetch news whenever the category changes or the component mounts
            setNews([]);
            setIsLoading(true);
            setPage(1);
            getNews();
    }, [category1]);

    useEffect(() => {
        // Fetch news when page changes
        getNews();
    }, [page]); // Dependency array: re-run effect when page changes

    function next() {
        // Increase page
        setPage(page + 1);
    }

    return (
        <div className='mt-1'>
            <marquee direction="right" scrollamount="30">
                <h1 style={{ color: "red" }}>{category1}-News-HeadLines</h1>
            </marquee>
            {isLoading && <Loader />}
            <InfiniteScroll
                dataLength={news.length}
                next={next}
                hasMore={true} // Update this based on whether there are more articles to fetch
                loader={<Loader />}
            >
                <div className='container-fluid'>
                    <div className='row mt-3 d-flex justify-content-around'>
                        {news.map((data, index) => (
                            <div className='col-lg-4 mt-3 bg-light card1' key={index}>
                                <span style={{ color: "red", display: "flex", justifyContent: 'flex-end', backgroundColor: "black", padding: "3px 20px", marginLeft: "10px", borderRadius: "10px", marginTop: '5px', position: "absolute", zIndex: '3' }}>{data.source.name}</span>
                                <img style={{ position: "relative", zIndex: '2' }} src={data.urlToImage === null ? altimg : data.urlToImage} alt='img is loading..' />
                                <p>{data.description === null ? 'Stick to this plan and you’ll start to see and feel the difference in your core strength and definition,” Leon Bolmeer said'.slice(0, 30) : data.description.slice(0, 30)}...</p>
                                <p>{data.content === null ? 'Stick to this plan and you’ll start to see and feel the difference in your core strength and definition,” Leon Bolmeer said'.slice(0, 50) : data.content.slice(0, 50)}...by</p>
                                <h2>{data.author ? 'Hemanth javvaji' : data.author}...on</h2>
                                <h6>{new Date(data.publishedAt).toGMTString()}</h6>
                                <a className='btn btn-primary' target='_blank' rel="noreferrer" href={data.url}>Read More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Newscontent;
