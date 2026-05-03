

const fetchData =async () => {
     const res = await fetch('https://assignment8backend.vercel.app/api/courses');
     const data = await res.json()
   
    return data;
  
}

export default fetchData