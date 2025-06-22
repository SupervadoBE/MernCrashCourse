import { useState } from 'react'
import { Box, Container, Heading, Input, VStack, useColorModeValue, Button, useToast } from '@chakra-ui/react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const toast = useToast()

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill in all fields')
      return
    }
    // Here you would typically send the product to your backend API
    const { success, message } = await createProduct(newProduct)
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    // Reset the form
    setNewProduct({ name: '', price: '', image: '' })
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading as='h1' size='2xl' textAlign='center' mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue('white', 'gray.800')}
          p={6} rounded={'lg'} shadow={'md'}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              size='lg'
            />
            <Input
              placeholder='Product Price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              size='lg' 
              type='number'
            />
            <Input
              placeholder='Product Image URL'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              size='lg'
              type='url'
            />
            <Button
              colorScheme='blue'
              onClick={handleAddProduct}
              w={"full"}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage