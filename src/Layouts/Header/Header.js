import React from 'react'
import "./Header.css"
import logo from "../../img/tvlogo.png"
import { Text,Image,Page,StyleSheet } from '@react-pdf/renderer'
const styles = StyleSheet.create({
  logo :{
    height :"30px",
    width : "40px"
  },
  disclaimer : {
    fontSize :"15px"
  },
  headerContainer :{
    display : "flex"
  }
})
const Header = () => {
  return (
    <Page style={styles.headerContainer} >
      <Image src={logo} alt='TV Logo' style={styles.logo} height={5}/>
      <Text style={styles.disclaimer}> Confidential - TestVagrant Technologies Private Limited</Text>
    </Page>
  )
}

export default Header
