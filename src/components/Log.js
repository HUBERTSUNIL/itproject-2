import React, { useContext } from 'react'
import dataContext from '../contexts/dataContext'
import Dataitem from './Dataitem'

const Log = () => {
    const context = useContext(dataContext)
    const datas=context
    console.log(datas[0].id);
    return (
    <div className='mx-3 p-3'>
        <table >
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
  )
}

export default Log
