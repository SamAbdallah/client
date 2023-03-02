import React from 'react'
import {useState,useEffect,useContext } from "react";
import Axios from 'axios';
import image1 from "./images/item.jfif"
import { Box,Image,Wrap, WrapItem } from '@chakra-ui/react'
import "./itmes.css"
import { ShopContext } from '../../Context/ShopContext';

function Items() {
    const [items,setItems]=useState([])
    const{status}=useContext(ShopContext)


    useEffect(()=>{
    Axios.get("http://localhost:3005/getItems").then((response)=>{
      setItems(response.data) 
    })},[])

    if(status=="loggedIn"){
   
          return (
        <div className='container'>
           <Wrap spacing="30px" padding="70" backgroundColor="white">
            {/* // <Flex marginLeft="100" marginTop="100" gap="10" direction="column"> */}
             
                {items.map((item)=>{
                  return(<WrapItem backgroundColor="white"><Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor="antiquewhite">
                    <Image src={image1}/>
                    <Box fontFamily="cursive" paddingLeft="3">{item.name}</Box>
                    <Box paddingLeft="3">{item.price}$</Box>
                    
        
        
                  </Box></WrapItem>)
                })}
              </Wrap></div>)}


            //   </Flex>)

}

export default Items

