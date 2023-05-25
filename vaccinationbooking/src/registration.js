import React from 'react'

const registration = () => {
  return (

<form>
    <label for="name">Name:</label>
    <input type = "text" id="name" value= "name"><br><br>
    <label for="nric">NRIC:</label>
    <input type = "text" value= "nric"><br><br>
<select id = "centre">
    <option value="Bukit Merah Polyclinic">Bukit Merah Polyclinic</option>
    <option value="Bedok Polyclinic">Bedok Polyclinic</option>
    <option value="Sengkang Polyclinic">Sengkang Polyclinic</option>
    <option value="Tampines Polyclinic">Tampines Polyclinic</option>
</select>

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




</form>

    </div>
  )
}

export default registration;