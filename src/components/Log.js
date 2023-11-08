import React, { useContext } from 'react'
import dataContext from '../contexts/dataContext'
import Dataitem from './Dataitem'

const Log = () => {
    const context = useContext(dataContext)
    const {datas}=context
    console.log(datas[0].id);
    return (
        <div className='m-3 p-3'>
    <div className='m-3 p-3'>
        <h1 className='d-flex justify-content-center'>Patient List</h1>
        <table className='m-3 p-3'>
        <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Disease</th>
            <th>Note</th>
            <th>Date</th>
        </tr>
        
        {datas.map((data) => {
            return <Dataitem data={data} />
        })}
        </table>
    </div>
    </div>
  )
}

export default Log
