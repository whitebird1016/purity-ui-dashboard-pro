/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { HSeparator } from "components/Separator/Separator";
import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const BrandCard = ({
  icon,
  title,
  avatars,
  description,
  participants,
  date,
}) => {

  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();

  return (
    <Card alignSelf="flex-start">
      <CardHeader mb="18px">
        <Flex justify="space-between" w="100%">
          <Flex>
            <IconBox
              bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
              w="70px"
              h="70px"
              me="22px"
            >
              {icon}
            </IconBox>
            <Flex direction="column">
              <Text fontSize="md" color={textColor} fontWeight="bold" mb="8px">
                {title}
              </Text>
              <AvatarGroup size="xs">
                {avatars.map((avatar, idx) => {
                  return <Avatar src={avatar} key={idx} />;
                })}
              </AvatarGroup>
            </Flex>
          </Flex>
          <Menu isOpen={isOpen1} onClose={onClose1}>
            <MenuButton onClick={onOpen1} alignSelf="flex-start">
              <Icon
                as={IoEllipsisVerticalSharp}
                color="gray.400"
                w="20px"
                h="20px"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column">
          <Text color="gray.400" fontSize="sm" fontWeight="normal">
            {description}
          </Text>
          <HSeparator my="22px" />
          <Flex justify="space-between" w="100%">
            <Flex direction="column">
              <Text fontSize="md" color={textColor} fontWeight="bold" mb="6px">
                {participants}
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                Participants
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="md" color={textColor} fontWeight="bold" mb="6px">
                {date}
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                Due Date
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BrandCard;
