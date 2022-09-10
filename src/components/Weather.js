import React,{useState} from "react";
import weather from "./weather.css";
function Weather()
{
   
    const [form, setForm] = useState({
        city:"",
        country:"",
    });
    const APIKEY = "a9b30b406023b235aa01433fc2a700d88";
    async function weatherData(e) {
        e.preventDefault();
        if(form.city=""){
            alert("add values");
        }
        else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
            .then((res) => res.json())
            .then((data) => data);
        }
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
      
        if (name == "city") {
            setForm({ ...form, city: "value" });
        }

        if (name == "country") {
            setForm({ ...form, country: "value" });
        }
        console.log(form.city, form.country);

    };
    return (
        <div classname="weather">
            <span className="title">Weather App</span>
            <br/>
            <form>
                <input type="text" name="city" placeholder="city" onChange = {(e) => handleChange(e)}/>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <input type="text" name="country" placeholder="country" onChange = {(e) => handleChange(e)}/>
               <button className="getweather" onClick={(e) => weatherData(e)}>Submit</button>
            </form>
        </div>    
    
    );
}

export default Weather;