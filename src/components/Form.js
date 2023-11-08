import React from 'react'

const Form = () => {
    const Add = async() =>{ 
        let roll = document.getElementById("roll").value
        let name = document.getElementById("name").value
        let disease = document.getElementById("disease").value
        let remarks = document.getElementById("remarks").value
        try {
            const response = await fetch('http://localhost:5000/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ roll:roll}),
            });

        console.log(response);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            
         }
    
        }
        catch(err){
          console.log(err);
        }
        
      }
    return (
    <div class="form-container">
        <form id='f'>
            <div class="input-container">
                <label for="rollNumber">Roll Number</label>
                <input type="text" id="roll" name="rollNumber" required/>
            </div>

            <div class="input-container">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required/>
            </div>

                <div class="input-container">
                    <div class="input-container-inside">
                        <label for="disease">Disease</label>
                        <input className='input-container-input' type="text" id="disease" name="disease" required />
                    </div>
                    <div class="input-container-inside">
                        <label for="name">Symptoms</label>
                        <input className='input-container-input' type="text" id="symptom" name="symptom" required />
                    </div>
                </div>

            <div class="input-container">
                <label for="note">Note</label>
                <textarea id="note" name="note" rows="4"></textarea>
            </div>

            <button  class="add-button" onClick={Add}>Add</button>
        </form>
    </div>
    )
}

export default Form
