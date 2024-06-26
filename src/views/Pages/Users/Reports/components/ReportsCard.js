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
import IconBox from "components/Icons/IconBox";
import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const ReportsCard = ({ backgroundImage, icon, title, number, percentage }) => {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  return (
    <Card backgroundImage={backgroundImage} minH="168px">
      <CardBody h="100%">
        <Flex direction="column" justify="space-between" w="100%" h="100%">
          <Flex justify="space-between" w="100%">
            <IconBox bg="#fff" w="50px" h="50px">
              {icon}
            </IconBox>
            <Menu isOpen={isOpen1} onClose={onClose1}>
              <MenuButton onClick={onOpen1} alignSelf="flex-start">
                <Icon
                  as={IoEllipsisHorizontalSharp}
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
          <Flex justify="space-between" w="100%">
            <Flex direction="column">
              <Text color="#fff" fontWeight="bold" fontSize="md">
                {number}
              </Text>
              <Text color="gray.400" fontWeight="normal" fontSize="sm">
                {title}
              </Text>
            </Flex>
            <Text
              color="#fff"
              fontWeight="bold"
              fontSize="md"
              alignSelf="flex-end"
            >
              {percentage}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ReportsCard;
