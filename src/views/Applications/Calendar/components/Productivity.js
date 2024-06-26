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
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import React from "react";
import {
  lineChartDataCalendar,
  lineChartOptionsCalendar,
} from "variables/charts";

const Productivity = () => {
  return (
    <Card
      px="0px"
      pb="0px"
      bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
      minH="230px"
      alignSelf="flex-start"
    >
      <CardHeader px="22px">
        <Flex direction="column">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Productivity
          </Text>
          <Text color="#fff" fontSize="sm" fontWeight="normal">
            <Text as="span" color="green.400" fontWeight="bold">
              +4%
            </Text>
            <Text as="span" fontWeight="bold">
              {" "}
              more{" "}
            </Text>
            in 2021
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Box w="100%">
          <LineChart
            chartData={lineChartDataCalendar}
            chartOptions={lineChartOptionsCalendar}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default Productivity;
