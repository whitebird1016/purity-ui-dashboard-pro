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

import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { HSeparator } from "components/Separator/Separator.js";
import React from "react";
import { IoIosStar, IoMdStarHalf } from "react-icons/io";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const ProfileStats = ({ title, description, team }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  return (
    <Card>
      <CardHeader>
        <Flex justify="space-between" align="center" w="100%">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button variant="no-hover" p="0px">
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
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" mt="16px">
          <Text color="gray.400" fontWeight="normal" fontSize="md" mb="20px">
            {description}
          </Text>
          <Flex justify="space-between" align="center">
            <Text color="gray.400">Industry:</Text>
            <Badge p="12px 16px" borderRadius="12px">
              {team}
            </Badge>
          </Flex>
          <HSeparator my="14px" />
          <Flex justify="space-between" align="center">
            <Text color="gray.400">Rating:</Text>
            <Stack direction="row" spacing="2px">
              <Icon as={IoIosStar} />
              <Icon as={IoIosStar} />
              <Icon as={IoIosStar} />
              <Icon as={IoIosStar} />
              <Icon as={IoMdStarHalf} />
            </Stack>
          </Flex>
          <HSeparator my="14px" />
          <Flex justify="space-between" align="center">
            <Text color="gray.400">Members:</Text>
            <AvatarGroup size="sm">
              <Avatar src={avatar1} />
              <Avatar src={avatar2} />
              <Avatar src={avatar5} />
              <Avatar src={avatar8} />
            </AvatarGroup>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProfileStats;
