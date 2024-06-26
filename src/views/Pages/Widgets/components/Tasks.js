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
  Icon,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  lineChartDataWidgets2,
  lineChartOptionsWidgets2,
} from "variables/charts";

const Tasks = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Card
      px="0px"
      maxH="230px"
      pb="0px"
      gridColumn={{ md: "1 / 3", lg: "auto" }}
    >
      <CardHeader px="22px">
        <Flex justify="space-between" w="100%">
          <Flex align="center">
            <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal} me="16px">
              <Icon
                as={FaCheckCircle}
                h={"24px"}
                w={"24px"}
                color={iconBoxInside}
              />
            </IconBox>
            <Flex direction="column">
              <Text color="gray.400" fontSize="xs" fontWeight="normal">
                Tasks
              </Text>
              <Text color={textColor} fontSize="lg" fontWeight="bold">
                480
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" minW="125px" alignSelf="flex-end">
            <Text color="gray.400" fontWeight="normal" fontSize="xs">
              60%
            </Text>
            <Progress
              colorScheme="teal"
              borderRadius="15px"
              h="6px"
              value={60}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Box w="100%">
          <LineChart
            chartData={lineChartDataWidgets2}
            chartOptions={lineChartOptionsWidgets2}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default Tasks;
