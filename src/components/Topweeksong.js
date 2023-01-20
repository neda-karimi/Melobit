import React , {useState, useEffect}  from 'react';
import { getTopWeekSong } from '../data/api';
import Top from './Top';

const Topweeksong = () => {
    const [topWeekSong,setTopWeekSong]=useState([])

    useEffect(()=>{
      const fetchAPI= async () =>{
         const data=await getTopWeekSong();
         setTopWeekSong(data)
      }
      fetchAPI();
  },[])
    return (
        <div>
            <Top  title="Top Songs Of The Week"  state={topWeekSong}/>
        </div>
    );
};

export default Topweeksong;