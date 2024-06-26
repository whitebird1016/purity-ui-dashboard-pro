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
    Box, Flex, Stat,
    StatHelpText,
    StatLabel,
    StatNumber, useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React, { useRef } from "react";

const MiniLineChartStatistics = ({ title, price, percentage, chart }) => {
    const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card px="0px" pb="0px">
      <CardHeader px="22px">
        <Stat>
          <StatLabel fontSize="xs" color="gray.400">
            {title}
          </StatLabel>
          <Flex>
            <StatNumber fontSize="lg" me="4px" color={textColor}>
              {price}
            </StatNumber>
            <StatHelpText
              color="green.400"
              size="sm"
              alignSelf="flex-end"
              fontWeight="bold"
              mb="0px"
            >
              {percentage}
            </StatHelpText>
          </Flex>
        </Stat>
      </CardHeader>
      <CardBody>
        <Box w="100%" h="100%">
          {chart}
        </Box>
      </CardBody>
    </Card>
  );
};

export default MiniLineChartStatistics;
