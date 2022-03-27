import * as React from 'react';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { auth } from '../firebase-config';

function Employee(props){
    const navigate = useNavigate();

    const [LTC,setLTC]=useState({
        Nature:"",
        from_value:null,
        to_value:null,
        days:"",
        spouse:"",
        sj_from_value:null,
        sj_to_value:null,
        fj_from_value:null,
        fj_to_value:null,
        p_from:null,
        p_to:null,
        s_from:null,
        s_to:null,
        homeTown:"",
        NatureLTC:"",
        Destination:"",
        EstimatedFare:"",
        adv:"",
        encashment:"",
        Edays:'',
        checked:null,
        cert:"",
        numRows:0
    })



    const inputEventltc=async(e)=>{
        setLTC({...LTC,[e.target.name]:e.target.value});
    }

    const[tableData,setTableData] = React.useState([
    ]);
    const columns =[
        {title: "Serial No.",field:"serial"},
        {title:"Name",field:"name"},
        {title:"Age",field:"age"},
        {title:"Relationship",field:"relation"},
        {title:"Travelling(Place) From",field:"tfrom"},
        {title:"Travelling(Place) To",field:"tto"},
        {title:"Travelling Back (Yes/No)",field:"tback",lookup:{yes:"Yes",no:"No"}},
        {title:"Mode of Travel",field:"mode"}
    ];

    // Employee Code Starts

    const[employee,setemployee]=React.useState({
        FirstName:'',
        LastName:'',
        EmpCode:'',
        Designation:'',
        Dept:'',
        JoinDate:null,
        BandPay:''
    })

    const inputEventemp=async(e)=>{
        setemployee({...employee,[e.target.name]:e.target.value});
    }
    
    const[trig,settrig]=useState(0);


    const submit=(e)=>{
        settrig(1);
        props.getdata(employee,tableData,LTC);
        e.preventDefault();
    }

    const printdoc=()=>{
        props.printForm();
        navigate("/userpage/"+auth.currentUser.uid)
    }

    return(
        <>
        <form onSubmit={submit}>
        <div className='employee_details'>
            <h3 className='heading'>Employee Details</h3>
            <div className='name_code'>
                <p>Employee Name & Code:</p>
                <TextField required id="outlined-basic" label="First Name" size='small' variant="outlined" name='FirstName' value={employee.FirstName} onChange={inputEventemp} />
                <TextField required id="outlined-basic" label="Last Name" size='small' variant="outlined" name='LastName' value={employee.LastName} onChange={inputEventemp} />
                <TextField required id="outlined-basic" label="Employee Code" size='small' variant="outlined" name='EmpCode' value={employee.EmpCode} onChange={inputEventemp} />
            </div>
            <div className='des_dep'>
                <p>Designation & Department:</p>
                <TextField required id="outlined-basic" label="Designation" size='small' variant="outlined" name='Designation' value={employee.Designation} onChange={inputEventemp} />
                <TextField required id="outlined-basic" label="Department" size='small' variant="outlined" name='Dept' value={employee.Dept} onChange={inputEventemp} />
                
            </div>
            <div className='joining'>
                <p>Date of entering the Central Government Service/Date of Joining with IIT Ropar:</p>
                <TextField required
                    id="date"
                    label="Date of joining"
                    type="date"
                    size='small'
                    value={employee.JoinDate}
                    onChange={inputEventemp}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <p>Band Pay + AGP/GP:</p>
                <TextField required id="outlined-basic" label="₹" size='small' variant="outlined" name='BandPay' value={employee.BandPay} onChange={inputEventemp}/>
            </div>
        </div>


        {/* LTC Details */}


        <div className='ltc_details'>
            <h3 className='heading'>LTC Details</h3>
            <div className='leave'>
                <p>Leave Required:</p>
                <TextField required id="outlined-basic" label="Nature" size='small' variant="outlined" name='Nature' value={LTC.Nature} onChange={inputEventltc} />
                <TextField required
                    id="date"
                    label="From"
                    type="date"
                    size='small'
                    value={LTC.from_value}
                    onChange={inputEventemp}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField required
                    id="date"
                    label="To"
                    type="date"
                    size='small'
                    value={LTC.to_value}
                    onChange={inputEventemp}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField required id="outlined-basic" label="No. Of Days" size='small' variant="outlined" name='days' value={LTC.days} onChange={inputEventltc} />
            </div>
            <div className='prefix_suffix'>
                <div className='prefix'>
                    <p>Prefix:</p>
                    <TextField required
                        id="date"
                        label="From"
                        type="date"
                        size='small'
                        value={LTC.p_from}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField required
                        id="date"
                        label="To"
                        type="date"
                        size='small'
                        value={LTC.p_to}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </div>
                <div className='suffix'>
                    <p>Suffix:</p>
                    <TextField required
                        id="date"
                        label="From"
                        type="date"
                        size='small'
                        value={LTC.s_from}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField required
                        id="date"
                        label="To"
                        type="date"
                        size='small'
                        value={LTC.s_to}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className='spouse'>
                <p >Whether spouse is employed, if yes whether entitled to LTC:</p>
                <FormControl style={{width: "20%",paddingTop: "0.5%"}}>
                    <InputLabel id="select-label">Select</InputLabel>
                    <Select required
                    labelId="select-label"
                    id="simple-select"
                    name='spouse'
                    value={LTC.spouse}
                    label="Select"
                    size='small'
                    onChange={(event)=>{setLTC({...LTC,spouse:event.target.value})}}
                    >
                    <MenuItem value={"Yes, Entitled to LTC"}>Yes, Entitled to LTC</MenuItem>
                    <MenuItem value={"Yes, Not Entitled to LTC"}>Yes, Not Entitled to LTC</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='journey_date'>
                <div className='self'>
                    <p>Proposed dates of Journey:</p>
                    <p>Self:</p>
                    <TextField required
                        id="date"
                        label="From"
                        type="date"
                        size='small'
                        value={LTC.sj_from_value}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField required
                        id="date"
                        label="To"
                        type="date"
                        size='small'
                        value={LTC.sj_to_value}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </div>
                <div className='family'>
                    <p>Family:</p>
                    <TextField required
                        id="date"
                        label="From"
                        type="date"
                        size='small'
                        value={LTC.fj_from_value}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField required
                        id="date"
                        label="To"
                        type="date"
                        size='small'
                        value={LTC.fj_to_value}
                        onChange={inputEventemp}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className='town'>
                <p>Home Town as recorded in the Service Book:</p>
                <TextField required id="outlined-basic" label="Hometown Name" size='small' variant="outlined" name='homeTown' value={LTC.homeTown} onChange={inputEventltc}/>
            </div>
            <div className='nature_ltc'>
                <p>Nature of LTC to be availed, Home Town/Anywhere in India with Block Year:</p>
                <TextField required id="outlined-basic" label="Nature of LTC" size='small' variant="outlined" name='NatureLTC' value={LTC.NatureLTC} onChange={inputEventltc} />
            </div>
            <div className='place_visited'>
                <p>If, anywhere in India, the place to be visited:</p>
                <TextField required id="outlined-basic" label="Place Name" size='small' variant="outlined" name='Destination' value={LTC.Destination} onChange={inputEventltc}/>
            </div>
            <div className='fare'>
                <p>Estimated fare of entitled class from the headquarter to Home Town/Place of visit by shortest route:</p>
                <TextField required id="outlined-basic" label="₹" size='small' variant="outlined" name='EstimatedFare' value={LTC.EstimatedFare} onChange={inputEventltc} />
                <Button variant="contained" component="span">Upload</Button>
            </div>
            <div className='person_details'>
                <Table columns={columns} data = {tableData} 
                    editable = {{
                        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                            setLTC({...LTC,numRows:LTC.numRows+1})
                            setTableData([...tableData,newRow])
                            resolve()
                        }),
                        onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                            const updatedData = [...tableData]
                            updatedData[oldRow.tableData.id] = newRow
                            setTableData(updatedData)
                            resolve()
                        }),
                        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
                            const updatedData = [...tableData]
                            updatedData.splice(selectedRow.tableData.id,1)
                            setTableData(updatedData)
                            setLTC({...LTC,numRows:LTC.numRows-1})
                            resolve()
                        })
                    }}
                    options={{search : false,addRowPosition:"first", actionsColumnIndex:-1, paging:false,headerStyle:{fontSize:"90%"},style:{fontSize:"0%"}}}
                    title = {<h3>Person(s) in respect of whom LTC is proposed to be availed:</h3>} /> 
            </div>
            <div className='advance'>
                <p>Advance Required:</p>
                <FormControl  style={{width: "7%",paddingTop: "0.5%"}}>
                    <InputLabel id="select-label_back">Yes/No</InputLabel>
                    <Select required
                    labelId="select-label_back"
                    id="simple-select_back"
                    name='adv'
                    value={LTC.adv}
                    label="Yes/No"
                    size='small'
                    onChange={inputEventltc}
                    >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='encashment'>
                <p>Encashment of earned leave required:</p>
                <FormControl style={{width: "7%",paddingTop: "0.5%"}}>
                    <InputLabel id="select-label_back">Yes/No</InputLabel>
                    <Select required
                    labelId="select-label_back"
                    id="simple-select_back"
                    name='encashment'
                    value={LTC.encashment}
                    label="Yes/No"
                    size='small'
                    onChange={inputEventltc}
                    >
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                </FormControl>
                <p>If Yes:</p>
                <TextField id="outlined-basic" label="No. of Days" size='small' variant="outlined" name='Edays' value={LTC.Edays} onChange={inputEventltc} />
            </div>
            <div className='undertaking'>
                <Checkbox required checked={LTC.checked} onChange={(newValue) => {setLTC({...LTC,checked:newValue.target.checked})}} inputProps={{ 'aria-label': 'controlled' }}/>
                I undertake (a) to produce the tickets for the journey within ten days of receipt of the advance (b) to refund the entire 
                advance in lump sum, in the event of cancellation of the journey within two months from the date of drawl of the advance or 
                failure to produce the tickets within 10 days of drawl the advance (c) to travel by Air/Rail/Road as per my entitlement and
                as per GOI LTC rules or specific rules as adopted by the Institute (d) to refund the excess advance drawn, if any, within 7
                working days of completion of the journey (e) to submit necessary bills, money receipts and other documents** as required 
                under the Rules and Regulations of the Institute within one month (where advance is drawn) / three months (where no advance 
                is drawn), from the date of completion of the journey. I will communicate to the competent authority about any change of 
                declared place of visit or change of dates before the commencement of the journey.
            </div>
            <h3 style={{marginBottom: "0"}}>Certified that:</h3>
            <div className='certification'>
                <ol type="1">
                    <li>The information, as given above is true to the best of my knowledge and belief; and</li>
                    <li>My spouse is not employed in Government service / my spouse is employed in government service and the concession has not been availed of by him/her separately of himself/herself or for any of the family members for the <TextField required id="standard-basic" size='small' label="" variant="standard" style={{width: "100px"}} name='cert' value={LTC.cert} onChange={inputEventltc}   />block year.</li>
                </ol> 
            </div>
            <div className='sign'>
                <b>Signature of the Applicant with date</b>
            </div>
        </div>
        {
            trig==0
            ?<Button id = "sub" type="submit" style={{marginLeft:"45vw",marginRight:"45vw",marginBottom:"4vh"}}>Submit</Button>
            :<><div className="formsubmittext">Your Form is Submitted!! <Button id = "print" onClick={printdoc}>Print</Button> </div></>
        }
        
        
    </form>
    <div className="formsubmit" style={{marginLeft:"33vw",marginRight:"33vw",marginBottom:"4vh",opacity:"1"}}>
        
    </div>
    </>
    )
}
export default Employee;