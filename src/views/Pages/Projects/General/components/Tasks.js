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
import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import { HomeIcon } from "components/Icons/Icons";
import React from "react";
import {
  lineChartDataGeneral,
  lineChartOptionsGeneral,
} from "variables/charts";

const Tasks = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconBoxInside = useColorModeValue("white", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");

  return (
    <Card
      mb="24px"
      maxW={{ sm: "330px", md: "100%" }}
      px={{ sm: "0px", lg: "22px" }}
    >
      <CardHeader>
        <Flex direction="column" w="100%">
          <Flex justify="space-between" w="100%" px={{ sm: "22px", lg: "0px" }}>
            <Flex align="center">
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal} me="16px">
                <HomeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  Tasks
                </Text>
                <Text color={textColor} fontWeight="bold" fontSize="xl">
                  480
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column" alignSelf="flex-end" minW="125px">
              <Text color="gray.400" fontWeight="normal" fontSize="md">
                60%
              </Text>
              <Progress
                colorScheme="teal"
                size="sm"
                borderRadius="15px"
                value={60}
              />
            </Flex>
          </Flex>
          <LineChart
            chartData={lineChartDataGeneral}
            chartOptions={lineChartOptionsGeneral}
          />
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default Tasks;
