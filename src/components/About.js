import React from 'react';
// import { Document, Page } from 'react-pdf';
import pdfFile from '../assets/css-handbook.pdf';

const About = () => {
    return (
        <>
            <h1 style={{ marginTop: 80 }}>JS pdf Free !</h1>
            {/* <Document file={pdfFile}>
                <Page pageNumber={1} />
            </Document> */}
            <iframe
        src={pdfFile}
        width="100%"
        height="600px"
      />
        </>
    )
}

export default About