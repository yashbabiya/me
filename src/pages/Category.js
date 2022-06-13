import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { categoryResults, searchResults } from "../helpers/search";

export default function Category() {
  const search = useLocation().search;
  const q = new URLSearchParams(search).get("q");

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView, entry } = useInView();
  const [page, setPage] = useState(1);


  const getSearchResult = async () => {
    setIsLoading(true);
    const nz = await categoryResults({ keyWord: q, page });
    setNews((prev)=>[...prev,...nz]);
    setIsLoading(false);
  };

  useEffect(() => {
    
    
    if(inView === true)
    setPage((prev)=>prev+1);
    
  }, [inView]);

  useEffect(()=>{
    getSearchResult();
  },[page])

  useEffect(() => {
    setPage(1);
    setNews([]);
    getSearchResult();
  }, [q]);

  return (

    <div className='page'>
     <h1>{q}</h1>
      {news?.length ?
        news.map((n, index) => (
          <div key={index}>
            <Card news={n} index={index}  refer={index + 1 === news.length ? ref : null} />
          </div>
        )):<>Loading...</>}

      {/* <h1>{isLoading && "lodings"}</h1> */}
    </div>
  );
}
