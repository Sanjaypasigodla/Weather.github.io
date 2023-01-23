import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Weather() {

    const [city,setCity]  = useState(null)
    const [search,setSearch] = useState("")
    const [idButton,setIdButton] = useState("")

    useEffect(() => {
        const fetchApi = async() => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${idButton}&units=metric&appid=d6e4d9849877db059e8e746b7638b608`;
            const response = await fetch(url);
            const rejson = await response.json();
            setCity(rejson.main)

        }
        fetchApi();
      
    },[idButton])

    const loginHandle = () => {
        setIdButton(search)
    }
    
  return (
    <div>
        <div><input type="text"  onChange={(e) => setSearch(e.target.value)}/></div>
        <div><button onClick={loginHandle}>Search</button></div>
        {!city ? <div>Data Not Found</div> : <div>
            <h1>{search}</h1><h1>{city.temp}°C</h1></div>}
        
        
      
    </div>
  )
}

export default Weather
