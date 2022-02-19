// import React from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { border, fontSize } from '@mui/system';
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


export default function Ltc() {

    const [from_value, setfromValue] = React.useState(null);
    const [to_value, settoValue] = React.useState(null);

    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    const [back_status, setBackStatus] = React.useState('');
    const back_handleChange = (event) => {
      setBackStatus(event.target.value);
    };

    const [sj_from_value, set_sj_fromValue] = React.useState(null);
    const [sj_to_value, set_sj_toValue] = React.useState(null);

    const [fj_from_value, set_fj_fromValue] = React.useState(null);
    const [fj_to_value, set_fj_toValue] = React.useState(null);
    
    const [checked, setChecked] = React.useState(null);

    const check_handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const[TableData,setTableData] = React.useState([
    ]);
    const columns =[
        {title: "Serial No.",field:"s"},
        {title:"Name",field:"n"},
        {title:"Age",field:"a"},
        {title:"Relationship",field:"r"},
        {title:"Travelling(Place) From",field:"tf"},
        {title:"Travelling(Place) To",field:"tt"},
        {title:"Travelling Back (Yes/No)",field:"tb",lookup:{Yes:"Yes",No:"No"}},
        {title:"Mode of Travel",field:"m"}
    ];
  return (
    <>
    <div className='ltc_details'>
            <h2 style={{margin:"10px", border: "2px solid rgb(45, 131, 212)",borderRadius: "5px",color: "White",background: "rgb(45, 131, 212)",padding: "7px",width:"fit-content"}}>LTC Details</h2>
            <div className='leave'>
                <p style={{fontSize: "19px"}}>Leave Required:</p>
                <TextField id="outlined-basic" label="Nature" size='small' variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="From"
                        value={from_value}
                        onChange={(newValue) => {
                        setfromValue(newValue);
                        }}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="To"
                        value={to_value}
                        onChange={(newValue) => {
                        settoValue(newValue);
                        }}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <TextField id="outlined-basic" label="No. Of Days" size='small' variant="outlined" />
            </div>
            <div className='spouse'>
                <p style={{fontSize: "19px", width: "350px"}}>Whether spouse is employed, if yes whether entitled to LTC:</p>
                <FormControl style={{width: "250px",paddingTop: "7px"}}>
                    <InputLabel id="select-label">Select</InputLabel>
                    <Select
                    labelId="select-label"
                    id="simple-select"
                    value={status}
                    label="Select"
                    size='small'
                    onChange={handleChange}
                    >
                    <MenuItem value={1}>Yes, Entitled to LTC</MenuItem>
                    <MenuItem value={2}>Yes, Not Entitled to LTC</MenuItem>
                    <MenuItem value={3}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='journey_date'>
                <div className='self'>
                    <p style={{fontSize: "19px"}}>Proposed dates of Journey:-</p>
                    <p style={{fontSize: "19px"}}>Self:</p>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Outward Journey"
                        value={sj_from_value}
                        onChange={(newValue) => {
                        setfromValue(newValue);
                        }}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Inward Journey"
                            value={sj_to_value}
                            onChange={(newValue) => {
                            settoValue(newValue);
                            }}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </LocalizationProvider>
                    </div>
                <div className='family'>
                    <p style={{fontSize: "19px"}}>Family:</p>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Outward Journey"
                        value={fj_from_value}
                        onChange={(newValue) => {
                        setfromValue(newValue);
                        }}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Inward Journey"
                            value={fj_to_value}
                            onChange={(newValue) => {
                            settoValue(newValue);
                            }}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='town'>
                <p style={{fontSize: "19px"}}>Home Town as recorded in the Service Book:</p>
                <TextField id="outlined-basic" label="Hometown Name" size='small' variant="outlined" />
            </div>
            <div className='nature_ltc'>
                <p style={{fontSize: "19px", width: "350px"}}>Nature of LTC to be availed, Home Town/Anywhere in India with Block Year:</p>
                <TextField id="outlined-basic" label="Nature of LTC" size='small' variant="outlined" />
            </div>
            <div className='place_visited'>
                <p style={{fontSize: "19px"}}>If, anywhere in India, the place to be visited:</p>
                <TextField id="outlined-basic" label="Place Name" size='small' variant="outlined" />
            </div>
            <div className='fare'>
                <p style={{fontSize: "19px"}}>Estimated fare of entitled class from the headquarter to Home Town/Place of visit by shortest route:</p>
                <TextField id="outlined-basic" label="₹" size='small' variant="outlined" />
                <Button variant="contained" component="span">Upload</Button>
            </div>
            <div className='person_details'>
                <div className='name_rel'>
                    <p style={{fontSize: "19px", width: "250px"}}>Person(s) in respect of whom LTC is proposed to be availed:</p>
                    <TextField id="outlined-basic" label="Name" size='small' style={{width: "300px"}} variant="outlined" />
                    <TextField id="outlined-basic" label="Relationship" size='small' variant="outlined" />
                    <TextField id="outlined-basic" label="Age" size='small' style={{width: "75px"}} variant="outlined" />
                    <TextField id="outlined-basic" label="Mode of Travel" size='small' style={{width: "170px"}} variant="outlined" />
                    </div>
                <div className='travelling'>
                    <p style={{fontSize: "19px"}}>Travelling(Place):</p>
                    <TextField id="outlined-basic" label="From" size='small' variant="outlined" />
                    <TextField id="outlined-basic" label="To" size='small' variant="outlined" />
                    <p style={{fontSize: "19px",paddingLeft: "40px"}}>Back(Yes/No):</p>
                    <FormControl style={{width: "100px"}}>
                        <InputLabel id="select-label_back">Yes/No</InputLabel>
                        <Select
                        labelId="select-label_back"
                        id="simple-select_back"
                        value={back_status}
                        label="Yes/No"
                        size='small'
                        style={{paddingBottom: "10px"}}
                        onChange={back_handleChange}
                        >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={2}>No</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" component="span">Add To Table</Button>
                </div>
            </div>
            <div className='advance'>
                <p style={{fontSize: "19px",paddingLeft: "40px"}}>Advance Required:</p>
                <FormControl style={{width: "100px"}}>
                    <InputLabel id="select-label_back">Yes/No</InputLabel>
                    <Select
                    labelId="select-label_back"
                    id="simple-select_back"
                    value={back_status}
                    label="Yes/No"
                    size='small'
                    style={{paddingBottom: "10px"}}
                    onChange={back_handleChange}
                    >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={2}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='encashment'>
                <p style={{fontSize: "19px",paddingLeft: "40px"}}>Encashment of earned leave required:</p>
                <FormControl style={{width: "100px"}}>
                    <InputLabel id="select-label_back">Yes/No</InputLabel>
                    <Select
                    labelId="select-label_back"
                    id="simple-select_back"
                    value={back_status}
                    label="Yes/No"
                    size='small'
                    style={{paddingBottom: "10px"}}
                    onChange={back_handleChange}
                    >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={2}>No</MenuItem>
                    </Select>
                </FormControl>
                <p style={{fontSize: "19px",paddingLeft: "100px"}}>If Yes:</p>
                <TextField id="outlined-basic" label="No. of Days" size='small' variant="outlined" />
            </div>
            <div className='undertaking'>
                <Checkbox checked={checked} onChange={check_handleChange} inputProps={{ 'aria-label': 'controlled' }}/>
                <p style={{width: "1350px",marginTop: "10px"}}>
                    I undertake (a) to produce the tickets for the journey within ten days of receipt of the advance (b) to refund the entire advance in lump 
                    sum, in the event of cancellation of the journey within two months from the date of drawl of the advance or failure to produce the tickets 
                    within 10 days of drawl the advance (c) to travel by Air/Rail/Road as per my entitlement and as per GOI LTC rules or specific rules as 
                    adopted by the Institute (d) to refund the excess advance drawn, if any, within 7 working days of completion of the journey (e) to submit 
                    necessary bills, money receipts and other documents** as required under the Rules and Regulations of the Institute within one month 
                    (where advance is drawn) / three months (where no advance is drawn), from the date of completion of the journey.
                    I will communicate to the competent authority about any change of declared place of visit or change of dates before the commencement 
                    of the journey.
                </p>
            </div>
            <h3 style={{marginBottom: "0px",marginLeft: "55px"}}>Certified that:</h3>
            <div className='certification'>
                <ol type="1" style={{width: "1350px"}}>
                    <li>The information, as given above is true to the best of my knowledge and belief; and</li>
                    <li>My spouse is not employed in Government service / my spouse is employed in government service and the concession has not been availed of by him/her separately of himself/herself or for any of the family members for the <TextField id="standard-basic" size='small' label="" variant="standard" style={{width: "100px"}}/>block year.</li>
                </ol> 
            </div>
            <div className='sign'>
                <h4 style={{}}>Signature of the Applicant with date</h4>
            </div>
            <div className='data_table'>
                <Table columns={columns} data = {TableData} title = "Person(s) in respect of whom LTC is proposed to be availed:"
                    editable = {{
                        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                            setTableData([...TableData,newRow])
                            resolve()
                        }),
                        onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
                            const updatedData = [...TableData]
                            updatedData[oldRow.TableData.id] = newRow
                            setTableData(updatedData)
                            resolve()
                        }),
                        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
                            const updatedData = [...TableData]
                            updatedData.splice(selectedRow.TableData.id,1)
                            setTableData(updatedData)
                            resolve()
                        })
                    }}
                    options={{search : false,addRowPosition:"first", actionsColumnIndex:-1}}
                />
            </div>
        </div>

    </>
  )
}
