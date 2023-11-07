import React from 'react'

const Dataitem = (props) => {
    const {data} = props
    return (

        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.disease}</td>
            <td>{data.note}</td>
            <td>{data.date}</td>
        </tr>
            
    )
}
export default Dataitem
