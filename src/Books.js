import React,{useState,useCallback} from 'react'

const Books = () => {
    const [data,setdata] = useState(0)
    const [obj,setobj] = useState(0)
    const handelclick = () =>{
        setdata(data+1)
    }
    const handelclicks = useCallback(() => {
        console.log('obj',obj)

        setobj(obj + 1)
      }, [obj])
    console.log('data',data)
    return (
        <div>
            <button  onClick={handelclick} >click me</button>
            <button  onClick={handelclicks} >clicks me</button>

        </div>
    )
}

export default Books

