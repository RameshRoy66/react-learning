import React,{useState} from 'react'

export default function State() {
    let [name,setName]=useState(0)
    let [name2,setName2]=useState('ramesh')

    const updateData = () => {
        setName(name +1);
    }
    const deleteData = () => {
        setName(name -1);
    }

    const updateData2 = () => {
        setName2('garaga');
    }
    const deleteData2 = () => {
        setName2('ramesh');
    }


  return (
    <div>

        <h1>{name}</h1>
        <button onClick={updateData}>plus</button>
        <button onClick={deleteData}>minus</button>
        <h1>{name2}</h1>
        <button onClick={updateData2}>plus</button>
        <button onClick={deleteData2}>plus</button>


    </div>
  )
}
