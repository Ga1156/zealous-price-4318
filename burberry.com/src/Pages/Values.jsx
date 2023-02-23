import React from 'react'
import {Box,Text,Heading,Image} from '@chakra-ui/react'
import Footer from './footer'
const Values = () => {
  return (
    <div>
     <Heading  as='h2' size='xl' marginBottom="40px" marginTop={"40px"} color="#4A5568">Values</Heading>
   <Box bg="gray.200">
    <Box w="100%" h="auto" >
      <Image src="https://assets.burberry.com/is/image/Burberryltd/FEC664EE-BD87-4546-8BBA-2D6EE77839A2?wid=1366"></Image>
      <Text></Text>
    </Box>
    <Box display={"grid"} gridTemplateColumns="repeat(3,1fr)" bg="gray.200" gap="4px" marginTop={"10px"}>
  <Box>
    <Image src="https://assets.burberry.com/is/image/Burberryltd/A935A88E-2BF2-4670-858C-EB077927C48C?$BBY_V2_ML_3X4$&wid=460&hei=613"></Image>
    <Text></Text>
  </Box>
  <Box>
    <Image src="https://assets.burberry.com/is/image/Burberryltd/33BDDD60-0C95-4E7B-988A-846243B38F17?$BBY_V2_ML_3X4$&wid=460&hei=613"></Image>
    <Text></Text>
  </Box>
  <Box>
  <Image  src="https://assets.burberry.com/is/image/Burberryltd/58ABAC93-A10A-4C84-BED4-1A0A98BE39DF?$BBY_V2_ML_3X4$&wid=460&hei=613"></Image>
    <Text></Text>
  </Box>
    </Box>

    <Box w="100%" h="auto" marginTop={"10px"}>
      <Image src="https://assets.burberry.com/is/image/Burberryltd/E53CDE73-5DF6-4418-970C-3551087853A6?wid=1366"></Image>
      <Text></Text>
    </Box>
   </Box>
   <Footer/>
    </div>
  )
}

export default Values
