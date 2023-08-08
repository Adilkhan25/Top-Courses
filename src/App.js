
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import FilterBar from './components/FilterBar';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData()
  {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Error occur ", error);
    }
    setLoading(false);
  
  }
  useEffect(()=>{
    fetchData();
  },[]);
     

  return (

    <div className='container'>
      <div>
         <Navbar />
      </div>
      <div>
        <FilterBar filterData = {filterData} category={category} setCategory={setCategory}/>
      </div>
      <div>
        {
          loading ? (<Spinner/>):(<Cards courses = {courses} category = {category} />)
        }
      </div>
    </div>
  );
}

export default App;
