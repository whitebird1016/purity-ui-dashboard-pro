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
  Button,
  Flex,
  Text,
  useColorModeValue,
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

const Meeting = ({ icon, title, description, id, date }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Card>
      <CardHeader>
        <Flex align="center">
          {icon}
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {title}
            </Text>
            <Text fontWeight="normal" color="gray.400" fontSize="sm">
              {date}
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Text
            fontWeight="normal"
            color="gray.400"
            fontSize="md"
            mt="16px"
            mb="8px"
          >
            {description}
          </Text>
          <Text fontWeight="bold" color={textColor} fontSize="md">
            Meeting ID:{" "}
            <Text as="span" color="gray.400" fontWeight="normal">
              {id}
            </Text>
          </Text>
          <HSeparator my="14px" />
          <Flex justify="space-between" align="center">
            <Button variant="no-hover" bg="teal.300" p="0px 40px" h="35px">
              <Text fontSize="sm" fontWeight="bold" color="#fff">
                JOIN
              </Text>
            </Button>
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

export default Meeting;
