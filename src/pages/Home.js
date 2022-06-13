import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../components/Card";
import { loadRecents } from "../helpers/search";

export default function Home() {

  const nzs = [
    // {
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.images.express.co.uk/img/dynamic/73/1200x712/1624068_1.jpg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    
    // },
    // {
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.corporatefinanceinstitute.com/assets/smart-goal-1.jpeg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    // },
    // {
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.images.express.co.uk/img/dynamic/73/1200x712/1624068_1.jpg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    
    // },
    // {
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.corporatefinanceinstitute.com/assets/smart-goal-1.jpeg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    // },{
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.images.express.co.uk/img/dynamic/73/1200x712/1624068_1.jpg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    
    // },
    // {
    //   title:"Lewis Hamilton reacts to Azerbaijan Grand Prix investigation after Lando Norris incident - Express",
    //   urlToImage:"https://cdn.corporatefinanceinstitute.com/assets/smart-goal-1.jpeg",
    //   description:"",
    //   author:"HT Education Desk",
    //   content:"The Board of Secondary Education Rajasthan (RBSE) Class 10 exam result will be announced on June 12 at 3 pm. Once the result is out candidates can check the result on the official websites at rajedub… [+13503 chars]",
    //   url:"https://www.hindustantimes.com/education/board-exams/rbse-10th-result-2022-live-latest-updates-on-rbse-101655014759779.html",
    // },
  ]
  const [news, setNews] = useState(nzs);
  const [headlines, setHeadlines] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView, entry } = useInView();
  const [typeOfNews, setTypeOfNews] = useState("top-headlines");

  const getRecentNews = async () => {
    setIsLoading(true);
    const nz = await loadRecents({ page: page });
    setNews((prev)=>[...prev,...nz]);

    setIsLoading(false);
  };

  // const {data,status}

  useEffect(() => {
    

    if(inView === true)
    setPage((prev)=>prev+1);
    
  }, [inView]);

  useEffect(()=>{
    // setPage(1);
    // setNews([]);
    getRecentNews();
  },[page])
  

  useEffect(() => {
    getRecentNews();
  }, []);

  return (
    <div className="page">
      
     <h1>Recents</h1>
      {news?.length ?
        news.map((n, index) => (
          <div key={index}>
          <Card news={n} index={index} refer={index + 1 === news.length ? ref : null} />
          </div>
        )):<>Loading...</>}

      {/* <h1>{isLoading && "lodings"}</h1> */}
    </div>
  );
}
