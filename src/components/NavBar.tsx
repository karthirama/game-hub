import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/610px-Uplay-logo.webp.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}
