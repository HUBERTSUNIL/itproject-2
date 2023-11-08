import DataContext from "./dataContext";
import { useState } from "react";

async function getd(){
  let data = []
  try {
    const response = await fetch('http://localhost:5000/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (response.ok) {
      const data1 = await response.json();
      console.log(data1.data);
      data = data1.data;
    }

  }
  catch(err){
    console.log(err);
  }
  return data;
}

const DataState = (props) => {
  const dataInitial = [
    {
      'id':'2022BCS58',
      'name':'BALA',
        'disease':'Cough',
        'note':'note about it',
        'date':'19-02-2023'}
        ,
        {'id':'2022BCS55',
        'name':'Ashiq',
        'disease':'Cough',
        'note':'note about it',
        'date':'19-02-2023'},
        {'id':'2022BCS52',
        'name':'hubert',
        'disease':'AIDS',
        'note':'kozhi',
        'date':'19-02-2023'}
      ]
      const [datas, setData] = useState(dataInitial)

    const addData = async (id, name, disease,symptoms,note) => {
      console.log("add",name)
      const response = await fetch(`http://localhost:5000/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({roll:id, name:name, disease:disease,symptoms:symptoms,note:note})
      });
      
    const d= await response.json();
    console.log(d);
    setData(datas.concat(d))
  }
  

  
  
  return (
    <DataContext.Provider value={{datas,addData}}>
      {props.children}
    </DataContext.Provider>
  )
}


export default DataState;