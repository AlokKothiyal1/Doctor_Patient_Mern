import React from 'react';
import { useState } from 'react';

export const AppContext = React.createContext();

function AppContextProvider(props){

    const [doctorId,setDoctorId] = useState('')
    const [patientData,setPatientData] = useState('')

    return (
        <AppContext.Provider value={{doctorId,setDoctorId,patientData,setPatientData}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
