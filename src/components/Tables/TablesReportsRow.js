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
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsCircleFill } from "react-icons/bs";

function TablesReportsRow(props) {
  const { image, name, email, domain, review, employed, id, isLast } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr border="none">
      <Td minWidth={{ sm: "250px" }} ps="0px" border={isLast ? "none" : null}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={image} w="50px" borderRadius="12px" me="18px" />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>

      <Td border={isLast ? "none" : null}>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {domain}
          </Text>
        </Flex>
      </Td>
      <Td border={isLast ? "none" : null}>
        <Flex align="center">
          <Icon
            as={BsCircleFill}
            w="8px"
            h="8px"
            color={
              review === "Positive"
                ? "teal.300"
                : review === "Negative"
                ? "red.500"
                : "gray.700"
            }
            me="6px"
          />
          <Text color="gray.400" fontSize="md">
            {review}
          </Text>
        </Flex>
      </Td>
      <Td border={isLast ? "none" : null}>
        <Text fontSize="md" color="gray.400" fontWeight="normal" pb=".5rem">
          {email}
        </Text>
      </Td>
      <Td border={isLast ? "none" : null}>
        <Text fontSize="md" color="gray.400" fontWeight="normal" pb=".5rem">
          {employed}
        </Text>
      </Td>
      <Td border={isLast ? "none" : null}>
        <Text fontSize="md" color="gray.400" fontWeight="normal" pb=".5rem">
          {id}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesReportsRow;
