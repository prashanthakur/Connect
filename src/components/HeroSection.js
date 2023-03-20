import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import '../css/Hero.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"transparent",
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HeroSection = () => {
    return (
        <>
            <div style={{ height: 400, background: "#6577ab" }}>
                {/* <Container> */}
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Item>
                            <p className='main'>Connect Your Success</p>
                            <p className='main-sec'>Connect Your Mentor</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs=4</Item>
                    </Grid>
                    {/* <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid> */}
                </Grid>
                {/* </Container> */}
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6577ab" fill-opacity="1" d="M0,64L40,53.3C80,43,160,21,240,16C320,11,400,21,480,53.3C560,85,640,139,720,170.7C800,203,880,213,960,208C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </>
    )
}

export default HeroSection