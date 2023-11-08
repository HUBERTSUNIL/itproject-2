import React from 'react'

const Form = () => {
    
    return (
    <div class="form-container">
        <form>
            <div class="input-container">
                <label for="rollNumber">Roll Number</label>
                <input type="text" id="rollNumber" name="rollNumber" required/>
            </div>

            <div class="input-container">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required/>
            </div>

            <div class="input-container">
                <label for="disease">Disease</label>
                <input type="text" id="disease" name="disease" required/>
            </div>

            <div class="input-container">
                <label for="note">Note</label>
                <textarea id="note" name="note" rows="4"></textarea>
            </div>

            <button type="submit" class="add-button" onClick={onclick}>Add</button>
        </form>
    </div>
    )
}

export default Form
