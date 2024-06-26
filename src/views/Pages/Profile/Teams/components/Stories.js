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
  Flex,
  Grid,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Stories = () => {
  // Chakra color mode
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Card px="0px">
      <CardBody overflowX={{ sm: "scroll", "2xl": "hidden" }}>
        <Grid
          gap={{ sm: "50px", "2xl": "70px" }}
          templateColumns={{ sm: "repeat(12, 1fr)", lg: "repeat(12, 1fr)" }}
        >
          <Flex
            direction="column"
            mx="auto"
            align="center"
            justify="center"
            ms="20px"
          >
            <Link href="#">
              <Flex
                justify="center"
                align="center"
                borderRadius="50%"
                bg={bgButton}
                w="62px"
                h="58px"
                mb="7px"
              >
                <Icon as={FaPlus} w="16px" h="16px" color="#fff" />
              </Flex>
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Add Story
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar4} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Esthera J
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar3} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Boris U
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar2} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Tao G
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar1} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Kay R
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar5} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Tom M
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar1} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Nicole N
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar7} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Emma O
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar8} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Marie P
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar9} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Bruce M
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar10} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Sandra A
            </Text>
          </Flex>
          <Flex direction="column" mx="auto" align="center" me="20px">
            <Link
              href="#"
              border="1px solid"
              borderColor="teal.300"
              borderRadius="50%"
              mb="6px"
              p="4px"
            >
              <Avatar src={avatar1} size="md" />
            </Link>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Katty L
            </Text>
          </Flex>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Stories;
