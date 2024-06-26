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
  Box,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import React from "react";
import {
  lineChartDataWidgets1,
  lineChartOptionsWidgets1,
} from "variables/charts";

const Income = () => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card px="0px" maxH="230px" pb="0px">
      <CardHeader px="22px">
        <Stat me="auto">
          <StatLabel fontSize="xs" color="gray.400" fontWeight="normal">
            Income
          </StatLabel>
          <Flex>
            <StatNumber fontSize="lg" color={textColor}>
              $130,912
            </StatNumber>
            <StatHelpText
              alignSelf="flex-end"
              justifySelf="flex-end"
              m="0px"
              ps="4px"
              color="green.400"
              fontWeight="bold"
              fontSize="sm"
            >
              +90%
            </StatHelpText>
          </Flex>
        </Stat>
      </CardHeader>
      <CardBody>
        <Box w="100%">
          <LineChart
            chartData={lineChartDataWidgets1}
            chartOptions={lineChartOptionsWidgets1}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default Income;
