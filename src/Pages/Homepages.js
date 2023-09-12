import React, { useEffect } from 'react';
import {Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useNavigate } from 'react-router-dom';

export default function Homepages() {

  const history = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if(user) {
            history('/');
        }
    }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl" 
          fontFamily="Work sans"
          color="black"
          textAlign="center"
        >Talk-A-Tive</Text>
      </Box>

      <Box bg="white" w="100%" color="black" p={4} borderRadius="lg" borderWidth="1px" >
      <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <Login/>
            </TabPanel>
            <TabPanel>
                <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}
