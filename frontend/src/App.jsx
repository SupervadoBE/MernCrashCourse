import { Box, useColorModeValue } from '@chakra-ui/react'
import{ Route, Routes } from 'react-router-dom'
import HomaPage from './pages/HomaPage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
