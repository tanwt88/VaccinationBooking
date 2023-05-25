import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const Registration = () => {
    let Navigate = useNavigate();
    
    const handleEditPage = () =>{
    Navigate("/edit")
    };

    const handleJabsNumber=(e)=>{
        e.preventDefault();
        console.log('selected jabs number.');
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('clicked submit.');
      }


    const [Name,setName]= useState("");
    const [NRIC,setNRIC]= useState("");
    const [Jabsnumber]=React.useState([
        {
            label: "1st Jab",
            value: "1"
        },
        {
            label:"2nd jab",
            value:"2"

        }
    ]);
    const [Venue,setVenue]=React.useState([
        {
            label: "Bukit Merah Polyclinic",
            value: "Bukit Merah Polyclinic"
        },
        {
            label:"Bedok Polyclinic",
            value:"Bedok Polyclinic"

        },
        {
            label:"Sengkang Polyclinic",
            value:"Sengkang Polyclinic"

        },
        {
            label:"Tampines Polyclinic",
            value:"Tampines Polyclinic"

        }
        
    ]);

    const [Date,setDate]=useState(new Date());

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");


    const [timeslot,setTimeslot]=React.useState([
        {
            label: "09:00",
            value: "9am"
        },
        {
            label:"10:00",
            value:"10am"

        },
        {
            label:"11:00",
            value:"11am"

        },
        {
            label:"12:00",
            value:"12pm"

        },
        {
            label:"13:00",
            value:"1pm"

        },
        {
            label:"14:00",
            value:"2pm"

        },
        {
            label:"15:00",
            value:"3pm"

        },
        {
            label:"16:00",
            value:"4pm"

        },
        {
            label:"17:00",
            value:"5pm"

        }

    ]);

  return (
<div>
<form onSubmit={handleSubmit} >
        <label for="name">Name:</label>
        <input type = "text" id="name" value= "name" onChange={e=>setName(e.target.value)}/>
        <label for="nric">NRIC:</label>
        <input type = "text" value= "nric" onChange={e=>setNRIC(e.target.value)}/>

        <select 
            id = "jabsnumber"
            onChange={handleJabsNumber}>
        <option value="firstjab">1st Jab</option>
        <option value="secondjab">2nd Jab</option>
        </select>

        <select id = "venue">
        <option value="Bukit Merah Polyclinic">Bukit Merah Polyclinic</option>
        <option value="Bedok Polyclinic">Bedok Polyclinic</option>
        <option value="Sengkang Polyclinic">Sengkang Polyclinic</option>
        <option value="Tampines Polyclinic">Tampines Polyclinic</option>
        </select>

        <DatePicker
        selected={Date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        />


        <select id = "timeslot">
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        </select>

    <button type="Submit">Submit</button>
    <button type="Update" onClick={handleEditPage}>Update Appointment</button>

</form>

    </div>
  )
}

export default Registration;