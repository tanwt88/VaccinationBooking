import React, {useState,useEffect} from 'react';

const EditPage = () => {
  const [Name,setName]= useState("");
  const [NRIC,setNRIC]= useState("");
  return (
    <div>
    <label for="name">Name:</label>
    <input type = "text" id="name" value= "name" onChange={e=>setName(e.target.value)}/>
    <label for="nric">NRIC:</label>
    <input type = "text" value= "nric" onChange={e=>setNRIC(e.target.value)}/>


    <select id = "jabsnumber">
    <option value="firstjab">1st Jab</option>
    <option value="secondjab">2nd Jab</option>
    </select>

    <select id = "edit">
    <option value="appointment">`${appt.timeslot} at ${appt.venue}, ${appt.type} ${appt.jabsnumber}`</option>
    </select>


    </div>

  )
}

export default EditPage;