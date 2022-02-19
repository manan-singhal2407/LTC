import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


function Employee(){
    const [FirstName, setFirstName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [EmpCode, setEmpCode] = React.useState("");
    const [Designation, setDesignation] = React.useState("");
    const [Dept, setDept] = React.useState("");
    const [JoinDate, setJoinDate] = React.useState(null);
    const [BandPay, setBandPay] = React.useState("");

    return( <>
        <div className='employee_details'>
            <h3 className='heading'>Employee Details</h3>
            <div className='name_code'>
                <p>Employee Name & Code:</p>
                <TextField id="outlined-basic" label="First Name" size='small' variant="outlined" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                <TextField id="outlined-basic" label="Last Name" size='small' variant="outlined" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                <TextField id="outlined-basic" label="Employee Code" size='small' variant="outlined" value={EmpCode} onChange={(e) => setEmpCode(e.target.value)} />
            </div>
            <div className='des_dep'>
                <p>Designation & Department:</p>
                <TextField id="outlined-basic" label="Designation" size='small' variant="outlined" value={Designation} onChange={(e) => setDesignation(e.target.value)} />
                <TextField id="outlined-basic" label="Department" size='small' variant="outlined" value={Dept} onChange={(e) => setDept(e.target.value)} />
                
            </div>
            <div className='joining'>
                <p>Date of entering the Central Government Service/Date of Joining with IIT Ropar:</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label="Date of Joining" format="dd-mm-yyyy" value={JoinDate} onChange={(newValue) => {setJoinDate(newValue);}}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <p>Band Pay + AGP/GP:</p>
                <TextField id="outlined-basic" label="₹" size='small' variant="outlined" value={BandPay} onChange={(e) => setBandPay(e.target.value)}/>
            </div>
        </div>
    </>
    )
}
export default Employee;