import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../service/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, error, loading } = useGenres();
  if (error) return null;
  if (loading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
                variant="link"
              >
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
