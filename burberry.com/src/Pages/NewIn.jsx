import React from 'react'
import {Box,Text,Image,Button} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from 'axios'
const NewIn = () => {
  const[data,setdata]=useState([])


    const getdata=()=>{
      axios.get(`http://localhost:8080/NEW-IN`)
      .then((res)=> setdata(res.data))
      .catch((err)=> console.log(err))
    }

    useEffect(()=>{
      getdata()
    },[])
  return (
    <Box>
     

      <Box w="100%" h="150px" mt="50px" >
        <Text fontWeight={600}> NEW IN</Text>
      <Box w="30%" h="200px" margin={"auto"} ><Text >The latest clothing, shoes and accessories from Burberry. Explore the Autumn/Winter 2022 collection of menswear, womenswear and childrenswear.</Text>
      </Box>
      </Box>
      <Box border="1px solid gray" w="100%" h="70px">

      </Box>
      <Box  display="grid" gridTemplateColumns={"repeat(3,1fr)"} gap="5px">
    {data.map((e)=><Box >
      <Image src={e.img} marginBottom="10px"></Image>
      <Text fontWeight={500} marginBottom="10px">{e.title}</Text>
      <Text fontWeight={400} marginBottom="30px">{e.price}</Text>
    </Box>)}
      </Box>

      <Button>
        VIEW MORE 
      </Button>
    </Box>
  )
}

export default NewIn
