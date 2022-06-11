import { Card, Input } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react'
import './index.css'
import Header from "../../components/Header/Index"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DasboardItems from '../DashboardItems/Index'


const Index = () => {
  
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        p: 4,
      };
     
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
      
  return (
    <div>
      <Header /> 

       <Card sx={{backgroundColor: '#F2F2F2', minHeight: '100vh', width: '100vw', margin:'auto'}}>

       <DasboardItems />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="modal_form_heading">
    <h8>Create Item</h8> 
</div>
            <div className="modal_form_item">
        <label>Name</label> 
<Input type="text" name="last_name" className="form-control" placeholder="Input Item name here" />
</div>

<div className="modal_form_item">
<label>Add Note</label> 
<TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      className="form-control "
      placeholder="Type Here"
    />
    </div>

    <div className="button-dashboard"> 
    <button className="btn btn-light bmg4">Cancel </button>  <button className="btn btn-secondary"> Create Event </button>
    </div>
        </Box>
      </Modal>
      
<AddCircleOutlineIcon onClick={handleOpen} sx={{ color:'blue', fontSize: '50px' }} className="myFoot"/>
            </Card> 
    </div>
  )
}

export default Index