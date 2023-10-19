// import React, { useState } from 'react';

import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        padding: 30
    },
    title: {
        color: 'red'
    },
    text:{
        fontSize: 14
    }
});

const PdfViewer = ({carDetail}) => {
console.log('pdf id  ', carDetail._id);

  return (
    <div>
        <Document>
            <Page style={styles.body}>
                <Image src={carDetail.picture} fixed></Image>
                <Text style={styles.title}>{carDetail.details}</Text>
                
            </Page>
        </Document>
    </div>
  );
};

export default PdfViewer;