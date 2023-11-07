import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Roll No.</label>
                <input type="input" className="form-control" id="id" name='id' />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Name</label>
                <input type="input" className="form-control" id="name" name='name' />
            </div>
            <div className="mb-3 form-check">
                <label for="exampleInputEmail1" className="form-label">Disease</label>
                <input type="input" className="form-control" id="disease" name='disease' />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Note</label>
                <textarea className="form-control" id="note" name='note' rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default Form
