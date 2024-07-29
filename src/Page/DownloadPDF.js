import React from 'react'
import { PDFDownloadLink,StyleSheet } from '@react-pdf/renderer';
import MyPDF from './MyPDF'
const styles = StyleSheet.create({
    a : {
        backgroundColor : 'grey',
        padding :'0.5rem',
        cursor :'pointer',
        textDecoration:"none",
        color:"white",
        borderRadius:"5px",
        marginTop:"auto",
        marginBottom:"0px",
        
    }
})
const DownloadPDF = () => {
  return (
    <PDFDownloadLink
      document={<MyPDF />}
      style={styles.a}
      fileName="resume.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
}

export default DownloadPDF
