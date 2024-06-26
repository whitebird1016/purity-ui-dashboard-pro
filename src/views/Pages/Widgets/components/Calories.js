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
  lineChartDataWidgets3,
  lineChartOptionsWidgets3,
} from "variables/charts";

const Calories = () => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card px="0px" pb="0px" gridColumn={{ md: "1 / 3", lg: "auto" }}>
      <CardHeader px="22px">
        <Stat me="auto">
          <StatLabel fontSize="xs" color="gray.400" fontWeight="normal">
            Calories
          </StatLabel>
          <Flex>
            <StatNumber fontSize="lg" color={textColor}>
              187
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
              +5%
            </StatHelpText>
          </Flex>
        </Stat>
      </CardHeader>
      <CardBody>
        <Box w="100%" maxH="100px">
          <LineChart
            chartData={lineChartDataWidgets3}
            chartOptions={lineChartOptionsWidgets3}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default Calories;
