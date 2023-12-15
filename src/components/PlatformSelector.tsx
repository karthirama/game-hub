import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { PlatformList } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (PlatformList: PlatformList) => void;
  selectedPlatform: PlatformList | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error, loading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {" "}
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
