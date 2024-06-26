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
    Flex, Icon, Text,
    useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TransactionRow from "components/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { transactionsCRM } from "variables/general";

const Transactions = ({title, date}) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Card>
      <CardHeader mb="12px">
        <Flex direction="column" w="100%">
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w="100%"
            my={{ md: "12px" }}
          >
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Flex align="center">
              <Icon
                as={FaRegCalendarAlt}
                color="gray.400"
                fontSize="md"
                me="6px"
              ></Icon>
              <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%" justify="center">
          {transactionsCRM.map((row, index) => {
            return (
              <TransactionRow
                name={row.name}
                logo={row.logo}
                date={row.date}
                price={row.price}
                key={index}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Transactions;
