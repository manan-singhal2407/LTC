import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Table from 'material-table';
import { useState } from 'react';


function Ltc(){


    const [LTC,setLTC]=useState({
        Nature:"",
        from_value:"",
        to_value:"",
        days:"",
        spouse:"",
        sj_from_value:"",
        sj_to_value:"",
        fj_from_value:"",
        fj_to_value:"",
        town:"",
        nature_ltc:"",
        visit:"",
        fare:"",
        advance:"",
        encash:"",
        encash_days:"",
        checked:"",
        certi:""
    })


//     const[Nature,setNature]=React.useState("");


//     const [from_value, setfromValue] = React.useState(null);
//     const [to_value, settoValue] = React.useState(null);

//     const [status, setStatus] = React.useState('');
//     const handleChange = (event) => {
//       setStatus(event.target.value);
//     };

//     const [back_status, setBackStatus] = React.useState('');
//     const back_handleChange = (event) => {
//       setBackStatus(event.target.value);
//     };

//     const [sj_from_value, set_sj_fromValue] = React.useState(null);
//     const [sj_to_value, set_sj_toValue] = React.useState(null);

//     const [fj_from_value, set_fj_fromValue] = React.useState(null);
//     const [fj_to_value, set_fj_toValue] = React.useState(null);
    
//     const [checked, setChecked] = React.useState(null);

//     const check_handleChange = (event) => {
//         setChecked(event.target.checked);
//     };

//     const[tableData,setTableData] = React.useState([
        
//     ]);
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
    return <>
        <div className='ltc_details'>
            <h3 className='heading'>LTC Details</h3>
            <div className='leave'>
                <p>Leave Required:</p>
                <TextField id="outlined-basic" label="Nature" size='small' variant="outlined" value={LTC.Nature} onChange={inputEvent} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="From"
                        value={LTC.from_value}
                        onChange={inputEvent}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="To"
                        value={LTC.to_value}
                        onChange={inputEvent}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <TextField id="outlined-basic" label="No. Of Days" size='small' variant="outlined" value={LTC.days} onChange={inputEvent} />
            </div>
            <div className='spouse'>
                <p >Whether spouse is employed, if yes whether entitled to LTC:</p>
                <FormControl style={{width: "20%",paddingTop: "0.5%"}}>
                    <InputLabel id="select-label">Select</InputLabel>
                    <Select
                    labelId="select-label"
                    id="simple-select"
                    value={LTC.spouse}
                    label="Select"
                    size='small'
                    onChange={inputEvent}
                    >
                    <MenuItem value={1}>Yes, Entitled to LTC</MenuItem>
                    <MenuItem value={2}>Yes, Not Entitled to LTC</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='journey_date'>
                <div className='self'>
                    <p>Proposed dates of Journey:</p>
                    <p>Self:</p>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Outward Journey"
                        value={LTC.sj_from_value}
                        onChange={inputEvent}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Inward Journey"
                            value={LTC.sj_to_value}
                            onChange={inputEvent}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </LocalizationProvider>
                    </div>
                <div className='family'>
                    <p>Family:</p>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Outward Journey"
                        value={LTC.fj_from_value}
                        onChange={inputEvent}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Inward Journey"
                            value={LTC.fj_to_value}
                            onChange={inputEvent}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='town'>
                <p>Home Town as recorded in the Service Book:</p>
                <TextField id="outlined-basic" label="Hometown Name" size='small' variant="outlined" value={LTC.town} onChange={inputEvent}/>
            </div>
            <div className='nature_ltc'>
                <p>Nature of LTC to be availed, Home Town/Anywhere in India with Block Year:</p>
                <TextField id="outlined-basic" label="Nature of LTC" size='small' variant="outlined" value={LTC.nature_ltc} onChange={inputEvent}/>
            </div>
            <div className='place_visited'>
                <p>If, anywhere in India, the place to be visited:</p>
                <TextField id="outlined-basic" label="Place Name" size='small' variant="outlined" value={LTC.visit} onChange={inputEvent}/>
            </div>
            <div className='fare'>
                <p>Estimated fare of entitled class from the headquarter to Home Town/Place of visit by shortest route:</p>
                <TextField id="outlined-basic" label="₹" size='small' variant="outlined" value={LTC.fare} onChange={inputEvent}/>
                <Button variant="contained" component="span">Upload</Button>
            </div>
            <div className='person_details'>
                <Table columns={columns} data = {tableData} 
                    editable = {{
                        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
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
                    <Select
                    labelId="select-label_back"
                    id="simple-select_back"
                    value={LTC.advance}
                    label="Yes/No"
                    size='small'
                    onChange={inputEvent}
                    >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={2}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='encashment'>
                <p>Encashment of earned leave required:</p>
                <FormControl style={{width: "7%",paddingTop: "0.5%"}}>
                    <InputLabel id="select-label_back">Yes/No</InputLabel>
                    <Select
                    labelId="select-label_back"
                    id="simple-select_back"
                    value={LTC.encash}
                    label="Yes/No"
                    size='small'
                    onChange={inputEvent}
                    >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={2}>No</MenuItem>
                    </Select>
                </FormControl>
                <p>If Yes:</p>
                <TextField id="outlined-basic" label="No. of Days" size='small' variant="outlined" value={LTC.encash_days} onChange={inputEvent}/>
            </div>
            <div className='undertaking'>
                <Checkbox checked={LTC.checked} onChange={inputEvent} inputProps={{ 'aria-label': 'controlled' }}/>
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
                    <li>My spouse is not employed in Government service / my spouse is employed in government service and the concession has not been availed of by him/her separately of himself/herself or for any of the family members for the <TextField id="standard-basic" size='small' label="" variant="standard" style={{width: "100px"}} value={LTC.certi} onChange={inputEvent}/>block year.</li>
                </ol> 
            </div>
            <div className='sign'>
                <b>Signature of the Applicant with date</b>
            </div>
        </div>
    </>
}
export default Ltc;
