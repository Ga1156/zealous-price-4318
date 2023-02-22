import { Search2Icon } from '@chakra-ui/icons'
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon ,ArrowRightIcon} from '@chakra-ui/icons'
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react'
import { Authcontext } from '../Context/AuthContext'
import { useRef } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Navigate } from 'react-router-dom';
import { AspectRatio } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

import {
  
 
  FormControl,
  FormLabel,

 
  
 
  
  AvatarBadge,
  
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
const Links = ['Become a seller', 'More', 'Cart' ];
const name4 = localStorage.getItem("name")
const NavLink = ({ children }) => (
 
  <Link
  fontWeight={600}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={name4===null?'/':'/cart'}>
    {children}
  </Link>
);

const LINKS=[
  {path:"/gifts",title:"GIFTS"},
  {path:"/newin",title:"NEW IN"},
  {path:"/womens",title:"WOMENS"},
  {path:"/mens",title:"MENS"},
  {path:"/childrens",title:"CHILDREN"},
  {path:"/outwear",title:"OUTWEAR"},
  {path:"/bag",title:"BAGS"},
  {path:"/stories",title:"STORIES"},
  {path:"/values",title:"VALUES"}
]

export default function Navbar() {
const name23=useRef("")


 const handlesearch =()=>{
  const Name23=name23.current.value 
  console.log(Name23)
 }
 
  const{isAuth}=useContext(Authcontext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login,setlogin]=useState(false)
  
  const login1=()=>{
   setlogin(true)
  }
  if(login){
    
   return  <Navigate to="/"/>
   }
   
  const username= localStorage.getItem("name")
  let useremail = localStorage.getItem('email')
 const logout=()=>{
  
  toast.success("Logout successfully")
  localStorage.removeItem("name")
  localStorage.removeItem("email")
  localStorage.removeItem("pass")
 }
 const name4=localStorage.getItem("name")
  return (
    <>
    <Toaster/>
    <Box w="100%" h="50px"bg={('black')}   paddingTop="15px" borderBottom={"1px solid white"}>
    <Heading fontWeight={500} as='h6' size='xs' color="white"  >  JOIN OUR COMMUNITY: SIGNUP FOR EXCLUSIVE BURBERRY UPDATES : <RouterLink to="/register">SIGN UP</RouterLink> </Heading>
    </Box>
      <Box bg={('black')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={3} alignItems={'center'}>
            <Box _hover={{
              
                cursor:"pointer"
              }}    w="300px" h="50px" onClick={()=> window.location.href = "/"} ><Heading color="white">BURBERRY</Heading></Box>
           <Box w="650px"  display="flex" justifyContent={"space-between"}  bg="black" >
          
          {LINKS.map((e)=>   <Text  color="white" fontWeight={600} > <RouterLink to={e.path}>{e.title}</RouterLink></Text>)}

        
          
           </Box> 
          
      
          
          </HStack>
          <Flex  >
          <Menu >
          <RouterLink to="/cart">  <MenuButton
                as={Button}
                
                variant={'link'}
                cursor={'pointer'}
                >
              <Avatar ml="250px"
             
                  size={'sm'}
                 
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsGGmat8qqE2zmS2CYgZNqTZiU296ZA6zF4XUj_vyPth1dn51uoBo5ly71AKPMda4BAY&usqp=CAU'
                  }
                />
                <Text color="white" fontSize={"12px"}>{username}</Text>
              </MenuButton></RouterLink>  
             
            </Menu>
          </Flex>
          <Flex  >
          <Menu  >
              <MenuButton
                as={Button}
               
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              <Avatar 
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe0cFaZ9e5Hm9X-tdWRLSvoZqg2bjemBABA&usqp=CAU'
                  }
                />
                <Text color="white" fontSize={"12px"}>{username}</Text>
              </MenuButton>
              <MenuList border="none" borderBottom={"none"} shadow="none" bg="none">
            
              
              
      <Stack
      
        spacing={4}
        w={'full'}
        maxW={'md'}
        maxH={"450px"}
        bg={('white')}
       
        rounded={'xl'}
        boxShadow={'lg'}
       
        p={6}
       >
        <Heading  fontWeight={600} as='h3' size='lg'>
       My Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full" >
              <Button w="full">Change Icon</Button>
             
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input isDisabled
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input isDisabled
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
       
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
          LOGOUT
          </Button>
       
        </Stack>
      </Stack>
 
               
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

       
      </Box>
    
   
    </>
  );
}