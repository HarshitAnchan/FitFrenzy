export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    }
  };


  

export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '5d5e7afb5emshb7cf4e9c823c002p12c282jsn88d4345f0cd4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
  
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
