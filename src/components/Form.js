import React from 'react'

const Form = () => {

    return (
        <div class="form-container">
            <form>
                <div class="input-container">
                    <div class="input-container-inside">
                        <label for="rollNumber">Roll Number</label>
                        <input className='input-container-input' type="text" id="rollNumber" name="rollNumber" required />
                    </div>
                    <div class="input-container-inside">
                        <label for="name">Name</label>
                        <input className='input-container-input'  type="text" id="name" name="name" required />
                    </div>
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

                <div class="input-container-note">
                    <label for="note">Note</label>
                    <textarea id="note" name="note" rows="4"></textarea>
                </div>

                <button type="submit" class="add-button" onClick={onclick}>Add</button>
            </form>
        </div>
    )
}

export default Form
