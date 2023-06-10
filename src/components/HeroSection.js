import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import heroimage from '../assets/3dhero.png'
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from "react-icons/bs";
import '../css/Hero.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HeroSection = () => {
    return (
        <>
            <div style={{ height: "100vh", background: "#C4B9FE", marginTop: 0 }}>
                <Grid container spacing={2}>
                    {/* <Grid item xs={4}>
                        <Item>xs=8</Item>
                    </Grid> */}
                    <Grid item md={6} xs={12}>
                        <Item>
                            <img src={heroimage} className='hero-image' />
                        </Item>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Item>
                            <div className='hero-tagline'>
                                <h4>Connect Your Mentor Now</h4>
                                <h1><BsCheck2Circle className='check-icons' /> 1 : 1 personal mentor </h1>
                                <h1><BsCheck2Circle className='check-icons' /> Free Resources </h1>
                                <h1><BsCheck2Circle className='check-icons' /> Doubt QA </h1>
                                <h1><BsCheck2Circle className='check-icons' /> Live classes </h1>
                                <Button variant="contained" color="error" size='lg'>
                                    Start
                                </Button>
                                {/* <p>Pdfs videos Codes </p> */}
                                {/* <p>
                                Connect with personal mentor
                            </p> */}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default HeroSection