

const fetchData =async () => {
     const res = await fetch('https://assignment-8-tau-one.vercel.app/data/course.json');
     const data = await res.json()
   
    return data;
  
}

export default fetchData