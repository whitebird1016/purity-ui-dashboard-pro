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
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BgMusicCard from "assets/img/BgMusicCard.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const SomeKindOfBlues = () => {
  return (
    <Card bgImage={BgMusicCard} bgRepeat="no-repeat">
      <CardHeader mb="60px">
        <Flex direction="column" w="100%">
          <Text color="#fff" fontWeight="bold" fontSize="lg">
            Some Kind of Blues
          </Text>
          <Text color="#fff" fontWeight="normal" fontSize="sm">
            Deftones
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack direction="row" spacing="18px">
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            borderRadius="50px"
            w="45px"
            h="45px"
          >
            <Icon as={AiFillBackward} color="#fff" w="26px" h="26px" />
          </Button>
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            borderRadius="50px"
            w="45px"
            h="45px"
          >
            <Icon as={FaPlay} color="#fff" w="18px" h="18px" />
          </Button>
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            borderRadius="50px"
            w="45px"
            h="45px"
          >
            <Icon as={AiFillForward} color="#fff" w="26px" h="26px" />
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SomeKindOfBlues;
