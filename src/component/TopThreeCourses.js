import fetchData from '@/lib/fetchData'
import React from 'react'
import { TopThree } from './TopThree';

const TopThreeCourses =async () => {
    
    const data =await fetchData();
    let topThree = data.filter(c => (c.id === 1 || c.id === 2 || c.id ===3));

    console.log(topThree)
  return (
    <div className='container-div mt-20 text-center'>
        <h1 className='section-heading mb-10'>Top 3 Course</h1>
        <TopThree  course={topThree}/>

    </div>
  )
}

export default TopThreeCourses






