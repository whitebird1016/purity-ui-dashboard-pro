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
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import DonutChart from "components/Charts/DonutChart";
import IconBox from "components/Icons/IconBox";
import { DocumentIcon } from "components/Icons/Icons";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import {
  donutChartDataGeneral,
  donutChartOptionsGeneral,
} from "variables/charts";

const Projects = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconBoxInside = useColorModeValue("white", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");

  return (
    <Card maxW={{ sm: "330px", md: "100%" }}>
      <CardBody>
        <Flex justify="space-between" w="100%" minH="190px">
          <Flex direction="column">
            <Flex align="center">
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal} me="16px">
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  Projects
                </Text>
                <Text color={textColor} fontWeight="bold" fontSize="xl">
                  115
                </Text>
              </Flex>
            </Flex>
            <Flex direction="column" mt="36px">
              <Flex align="center">
                <Icon
                  as={BsCircleFill}
                  color="teal.300"
                  w="10px"
                  h="10px"
                  me="8px"
                />
                <Text color={textColor} fontWeight="normal" fontSize="md">
                  Done
                </Text>
              </Flex>
              <Flex align="center">
                <Icon
                  as={BsCircleFill}
                  color="gray.400"
                  w="10px"
                  h="10px"
                  me="8px"
                />
                <Text color={textColor} fontWeight="normal" fontSize="md">
                  In progress
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <DonutChart
            chartData={donutChartDataGeneral}
            chartOptions={donutChartOptionsGeneral}
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Projects;
