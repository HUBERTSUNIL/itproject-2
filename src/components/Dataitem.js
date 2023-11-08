import React from 'react'

const Dataitem = (props) => {
    const {data} = props
    return (

        <tr>
            <td>{data.roll_no}</td>
            <td>{data.name}</td>
            <td>{data.disease}</td>
            <td>{data.remarks}</td>
            <td>{data.date}</td>
        </tr>
            
    )
}
export default Dataitem
