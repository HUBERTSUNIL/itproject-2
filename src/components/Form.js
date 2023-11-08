import React,{useContext,useState} from 'react'
import dataContext from '../contexts/dataContext'
const Form = () => {
    // const Add = async () => {
    //     let roll = document.getElementById("roll").value
    //     let name = document.getElementById("name").value
    //     let disease = document.getElementById("disease").value
    //     let remarks = document.getElementById("remarks").value
        
    //     try {
    //         const response = await fetch('http://localhost:5000/add', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ roll: roll }),
    //         });

    //         console.log(response);
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log(data);

    //         }

    //     }
    //     catch (err) {
    //         console.log(err);
    //     }

    // }

    const predict = async () => {
          const response = await fetch(`http://localhost:5000/predict`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({symptoms:document.getElementById("symp").value})
        });
        
      const d= await response.json();
      console.log(d);
      alert(d.report);
    }
    const context = useContext(dataContext);
    const {addData} = context;
    
    const [data, setData] = useState({id: "", name: "", disease: "",symptoms:"",note:""})
    const handleClick = (e)=>{
        e.preventDefault();

        addData(document.getElementById("roll").value,data['name'],data['disease'],document.getElementById("symp").value,data['note']);
    }
    const onChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
        <div class="form-container p-3 my-3">
            <h1 className='d-flex justify-content-center'>Patient Data</h1>
            <form id='f'>
                <div class="input-container">
                    <div className='input-container-inside'>
                        <label for="rollNumber">Roll Number</label>
                        <input type="text" id="roll" name="rollNumber"  onBlur={onChange} required />
                    </div>

                    <div className='input-container-inside'>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" value={data.name} onChange={onChange} required />
                    </div>
                </div>

                <div class="input-container">
                    <div class="input-container-inside">
                        <label for="disease">Disease</label>
                        <input className='input-container-input' type="text" id="disease" name="disease" value={data.disease} onChange={onChange} required />
                    </div>
                </div>
                
                <div class="input-container-inside">
                        <label for="name">Symptoms</label>
                        <div class="input-group">
                           <input type="text" aria-label="symptoms" onBlur={predict}  id='symp' placeholder='Cough,continuous_sneezing' class="form-control"/>
                            {/* <input type="text" aria-label="First name" onChange={onChange} value={data.symptoms} class="form-control"/>
                            <input type="text" aria-label="Last name" class="form-control"/>
                            <input type="text" aria-label="Last name" class="form-control"/> */}
                        </div>

                </div>

                <div class="input-container-note">
                    <label for="note">Note</label>
                    <textarea id="note" name="note" onChange={onChange} value={data.note} rows="4"></textarea>
                </div>

                <button class="add-button" onClick={handleClick} >Add</button>
            </form>
        </div>
    )
}

export default Form
