import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function FableCard({
  title,
  image,
  description,
  author,
  lastUpdated,
}) {
  return (
    <Card maxW={"445px"} w={"full"} rounded="lg" overflow={"hidden"}>
      <Box h={"300px"} bg={"gray.500"} pos={"relative"}>
        <Image h="100%" w="100%" src={image} alt={title} objectFit="cover" />
      </Box>

      <CardBody>
        <Stack>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>

      <CardFooter gap={"3"}>
        <Text>{author}</Text> · <Text>{lastUpdated}</Text>
      </CardFooter>
    </Card>
  );
}
