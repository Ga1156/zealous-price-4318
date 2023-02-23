import React from 'react'
import{Box ,Heading,Text} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter ,Image,Stack,Button } from '@chakra-ui/react'
import {DeleteIcon,StarIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

import {useState,useEffect} from 'react'
import axios from 'axios';
const Cart = () => {
  const [cartdata,setcartdata]=useState([])

  const getdata=()=>{
    axios.get('http://localhost:8080/CART')
    .then((res)=>setcartdata(res.data) )
   
 }


 useEffect(()=>{
    getdata()


  },[])

 
  if(cartdata.length===0){
    return <Box w="50%" margin="auto" h="auto"   mt="30px">
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFMpAOMEtUjUwATLF6otNR0gNisiyYJx_7w&usqp=CAU'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>YOUR CART IS EMPTY</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button color="white" w="300px" ml="50px" variant='solid' bg='#63171B'>
      <Link to="/register"> Login</Link>
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </Box>
  }

  return (
    
      <Box display="flex" gap="5px">
       
      <Box w="70%"  border="1px solid gray"   >
      {cartdata.map((e)=>  <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={e.img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{e.title}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
      <Heading size="md" textAlign={"left"}>Price :- ₹ {e.price}</Heading>
    </CardBody>

    <CardFooter >
      <Button variant='solid' colorScheme='gray' mr="5px"    _hover={{
              bg: 'red.500',
              color:"white"
            }} onClick={  async()=>  await axios.delete(`http://localhost:8080/CART/${e.id}`).then((res)=>getdata() )  }>
       Remove <DeleteIcon/>
      </Button>
      <Button variant='solid' colorScheme='gray' mr="5px" _hover={{
              bg: 'green.500',
              color:"white"
            }}>
      Buy Now <ArrowForwardIcon ml="2px"/>
      </Button>
      <Button variant='solid' colorScheme='gray' mr="5px" _hover={{
              bg: 'orange',
              color:"white"
            }}>
       Add To Favourites
      </Button>
    </CardFooter>
  </Stack>
</Card>
)}
      </Box>
 
      <Box w="30%" h="500px"  border="1px solid gray">

      </Box>
      </Box>
    
  )
}

export default Cart
