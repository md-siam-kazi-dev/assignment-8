

const fetchData =async () => {
     const res = await fetch('http://localhost:3000/data/course.json');
     const data = await res.json()
   
    return data;
  
}

export default fetchData