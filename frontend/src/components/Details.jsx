
import React ,{useState,useContext,useEffect} from 'react';
import axios from 'axios'
import { AppContext } from './ContextAPI/AppContextProvider';


function Details(){
    const {patientData} = useContext(AppContext)
    let [data,setData] =useState([])

    useEffect(()=>{
        setData(patientData)
        console.log(patientData)
    },[])

    return (
        <>
            <div className="d-flex justify-content-around " style={{backgroundColor:"gray",color:"white"}}>
                <h3 className="m-3">Name : {data.name}</h3>
                <h3 className="m-3">Gender : {data.gender}</h3>
                <h3 className="m-3">Age : {data.age}</h3>
            </div>
            <table class="table container my-3">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Medicines</th>
                    <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                     data.length!=0 && Object.keys(data.medicine).map((item,i)=>(
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>{item}</td>
                            <td>{data.medicine[item]}</td>
                        </tr>
                    ))
                      
                    }
                </tbody>
                </table>

        </>

    )
}
export default Details


// {_id: "5f9c14316bd6f0032a8404ef", doctor_id: "5f9c0c1613cc2d7b0a7c57b2", name: "Mahesh", gender: "Male", age: 20, …}age: 20doctor_id: "5f9c0c1613cc2d7b0a7c57b2"gender: "Male"medicine: Disprine: 20Med1: 20Paracetamole: 10__proto__: Objectname: "Mahesh"timestamp: "2020-10-30T13:25:05.070Z"__v: 0_id: "5f9c14316bd6f0032a8404ef"__proto__: Object