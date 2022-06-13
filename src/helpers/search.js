import axios from "axios";

const config = {
    apiKey:'3c6939a029074c4eb39251db468f2e9f',
    pageSize:10
}
export const loadRecents = async({page}) =>{
    const resd = await axios.request( {
        method: 'GET',
        // url: 'https://free-news.p.rapidapi.com/v1/search',
        url : `https://newsapi.org/v2/top-headlines`,
        params:{language:'en',page:page,...config} ,
        
        }).then((res)=>{
        
            
            return res.data.articles;
        }).catch((err)=>{
            return [];
        })

    return resd
}

export const searchResults = async({keyWord,page}) => {
    
    
    
     const resd =  await axios.request( {
        method: 'GET',
        // url: 'https://free-news.p.rapidapi.com/v1/search',
        url : `https://newsapi.org/v2/everything`,
        params: {q: keyWord,page:page,...config},
        
        }).then((res)=>{
        
        
        return [...res.data.articles];
        }).catch((err)=>{
            return [];
        })
    return resd;

  };


  export const categoryResults = async({keyWord,page}) => {
    
    const resd =  await axios.request( {
       method: 'GET',
       // url: 'https://free-news.p.rapidapi.com/v1/search',
       url : `https://newsapi.org/v2/top-headlines`,
       params: {category: keyWord,page:page,...config},
       
       }).then((res)=>{
       
       
       return [...res.data.articles];
       }).catch((err)=>{
           return [];
       })
   return resd;

 };