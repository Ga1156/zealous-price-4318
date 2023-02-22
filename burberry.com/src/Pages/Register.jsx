import React from 'react'
import {Box ,Image,Heading} from '@chakra-ui/react'
import {
  Flex,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
 
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Footer from './footer';
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
    
      <Box>
        <Image src="https://assets.burberry.com/is/image/Burberryltd/MyAccount.jpg?$BBY_V2_BASIC$&wid=1349&hei=270"></Image>
     <Heading mt="20px">SIGN IN $ REGISTER</Heading>
      </Box>
      <Box></Box>
      <Box  display={"flex"}  >
      <Box w="50%" paddingLeft="40px" >
      <Flex
    paddingLeft="50px"
      minH={'100vh'}
    
      justify={'center'}
    >
      <Stack spacing={8} w="100%" py={12} px={6}  >
        
        <Box
         
          bg={useColorModeValue('white', 'gray.700')}
       
          border="1px solid gray"
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Box>
      
    
      <Box  w="65%" marginRight={"50px"}>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"white"}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} >
       
        <Box
         mt="-50px"
         bg={"white"}
         border="1px solid gray"
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="profile" >
              <FormLabel>Profile Pic</FormLabel>
              <Input type="src" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'RGBA(0, 0, 0, 0.64)'}
                color={'white'}
                _hover={{
                  bg: 'black',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      </Box>
      
    </Box>
    <Box>
        <Footer/>
      </Box>
    </div>
  )
}

export default Register
