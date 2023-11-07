import DataContext from "./dataContext";
import { useState } from "react";

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
  
  return (
    <DataContext.Provider value={datas}>
      {props.children}
    </DataContext.Provider>
  )

}
export default DataState;