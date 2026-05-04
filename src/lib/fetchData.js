const fetchData = async () => {
  const res = await fetch('https://assignment8backend.vercel.app/api/courses');

  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }

  const data = await res.json();
  return data;
};

export default fetchData;