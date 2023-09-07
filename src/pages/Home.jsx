import { SimpleGrid } from "@chakra-ui/react";
import FableCard from "../components/FableCard";

const fableData = [
  {
    title: "Harry Potter",
    image: "https://picsum.photos/300",
    description:
      "A boy learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    author: "J.K. Rowling",
    lastUpdated: "2007",
  },
  {
    title: "Harry Potter",
    image: "https://picsum.photos/300",
    description:
      "A boy learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    author: "J.K. Rowling",
    lastUpdated: "2007",
  },
  {
    title: "Harry Potter",
    image: "https://picsum.photos/300",
    description:
      "A boy learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    author: "J.K. Rowling",
    lastUpdated: "2007",
  },
  {
    title: "Harry Potter",
    image: "https://picsum.photos/300",
    description:
      "A boy learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    author: "J.K. Rowling",
    lastUpdated: "2007",
  },
];

export default function Home() {
  return (
    <SimpleGrid
      p="12"
      columns={{ base: 1, lg: 2, xl: 3 }}
      spacing={{ base: 6, lg: 8 }}
    >
      {fableData.map((data) => (
        <FableCard key={data.title} {...data} />
      ))}
    </SimpleGrid>
  );
}
