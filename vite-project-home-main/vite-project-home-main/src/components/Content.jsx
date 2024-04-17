import { Card, Stack, CardBody, CardFooter, Image, Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import autocp from "../assets/image/Ebooks/Autocompadecida.jpg";
import pequenopc from "../assets/image/Ebooks/pequenoprincipe.jpg";


const Content = () => {
  
    const imageStyle = {
      width: "400px", // Defina o tamanho desejado em pixels
      height: "600px", // Defina o tamanho desejado em pixels
    }
  return (
    <div>
      <Grid templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']} gap={4} maxW={500} minW={200}>
        <GridItem>
          <Card minW={"sm"}  >
            <CardBody style={{ width: "400px", height: "400px" }}>
              <Image
                src={autocp}
                alt='Auto da Compadecida'
                borderRadius='lg'
                style={imageStyle}
              />
              <Stack mt='6'>
                <Heading size='md'>Alto da Compadecida</Heading>
                <Text>
                As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem>
          <Card minW={"sm"}>
            <CardBody style={{ width: "400px", height: "400px" }}>
              <Image
                src={pequenopc}
                alt='O Pequeno príncipe'
                borderRadius='lg'
                style={imageStyle}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>O Pequeno Principe</Heading>
                <Text h={136}>
                Um piloto cai com seu avião no deserto e ali encontra uma criança loura e frágil. Ela diz ter vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois repensam os seus valores e encontram o sentido da vida.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        
      </Grid>
      
    </div>
  );
};

export default Content;
