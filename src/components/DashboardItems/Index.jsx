import React from 'react'
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Index = () => {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#ffffff',
        itemSpacing : '5px',
        textAlign: 'left',
        color: '#000000',
        width: '450px',
        height: '200px',
        marginTop : '50px',
        marginLeft: '20px',
        marginBottom : '10px',
        padding: '10px',

      }));

      
    
  return (
    <Grid container spacing={2} sx={{margin: 'auto'}}>
           
     <Grid  item>
<Item> 
    <div>
    <span className="text-gray small" > Name </span>
    <p className="small">Item 1 </p> 

<div className="d-dashboard"><span className="text-gray small">Description</span> 
    <p>Amet minimunm ubushufb suhusfbh  usbfubsufbs sfusbfusn annjn  bhbhbh iknkh uu </p>
</div>
    
    <div className="button-dashboard"> 
    <button className="btn btn-light bmg4">Edit </button>  <button className="btn btn-secondary"> Delete </button>
    </div>

</div>
</Item>
    </Grid>

    <Grid  item>
    <Item> 
    <div>
    <span className="text-gray small" > Name </span>
    <p className="small">Item 2 </p> 

    <div className="d-dashboard"><span className="text-gray small">Description</span> 
    <p>Amet minimunm ubushufb suhusfbh  usbfubsufbs sfusbfusn annjn  bhbhbh iknkh uu </p>
    </div>
    
    <div className="button-dashboard"> 
    <button className="btn btn-light bmg4">Edit </button>  <button className="btn btn-secondary"> Delete </button>
    </div>

    </div>
    </Item>
    </Grid>

    <Grid  item>
<Item> 
    <div>
    <span className="text-gray small" > Name </span>
    <p className="small">Item 3 </p> 

<div className="d-dashboard"><span className="text-gray small">Description</span> 
    <p>Amet minimunm ubushufb suhusfbh  usbfubsufbs sfusbfusn annjn  bhbhbh iknkh uu </p>
</div>
    
    <div className="button-dashboard"> 
    <button className="btn btn-light bmg4">Edit </button>  <button className="btn btn-secondary"> Delete </button>
    </div>

</div>
</Item>
    </Grid>
</Grid>
  )
}

export default Index