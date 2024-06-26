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
  Button,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CRMimage from "assets/img/CRM-image.png";
import peopleImage from "assets/img/people-image.png";
import EventCalendar from "components/Calendars/EventCalendar";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import LineChart from "components/Charts/LineChart";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { calendarDataCRM } from "variables/calendar";
import {
  lineChartDataCRM1,
  lineChartDataCRM2,
  lineChartOptionsCRM1,
  lineChartOptionsCRM2,
} from "variables/charts";
import { invoices } from "variables/general";
import Invoices from "./components/Invoices";
import MartinaBirthday from "./components/MartinaBirthday";
import MiniLineChartStatistics from "./components/MiniLineChartStatistics";
import Revenues from "./components/Revenues";
import Transactions from "./components/Transactions";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

function CRM() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ sm: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.6fr 1fr", xl: "2fr 1fr" }}
        templateRows="1fr"
        gap="24px"
        mb={{ lg: "24px" }}
      >
        <Grid
          templateColumns="auto"
          templateRows={{ sm: "1fr auto", lg: "1fr 2.5fr" }}
          gap="24px"
        >
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing="24px"
            maxH={{ lg: "220px" }}
          >
            <MiniLineChartStatistics
              title={"Visitors"}
              price={"$5,927"}
              percentage={"+55%"}
              chart={
                <LineChart
                  chartData={lineChartDataCRM1}
                  chartOptions={lineChartOptionsCRM1}
                />
              }
            />
            <MiniLineChartStatistics
              title={"Income"}
              price={"$130,912"}
              percentage={"+90%"}
              chart={
                <LineChart
                  chartData={lineChartDataCRM2}
                  chartOptions={lineChartOptionsCRM2}
                />
              }
            />
            <Card p="0px">
              <Button
                p="0px"
                w="100%"
                h="100%"
                bg="transparent"
                color="gray.500"
                borderRadius="15px"
              >
                <Flex
                  direction="column"
                  justifyContent="center"
                  align="center"
                  h="120px"
                >
                  <Icon as={FaPlus} w="30px" h="30px" mb="12px" />
                  <Text fontSize="lg" fontWeight="bold">
                    New Tab
                  </Text>
                </Flex>
              </Button>
            </Card>
          </Stack>
          <Card w={{ sm: "100%" }} h="575px">
            <CardHeader pt="6px" mb="8px">
              <Flex direction="column">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Calendar
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Wednesday, 2021
                </Text>
              </Flex>
            </CardHeader>
            <CardBody position="relative" display="block" height="100%">
              <EventCalendar
                initialDate="2021-10-01"
                calendarData={calendarDataCRM}
              />
            </CardBody>
          </Card>
        </Grid>
        <Stack direction="column" spacing="24px">
          <WorkWithTheRockets
            backgroundImage={peopleImage}
            title={"Hello John!"}
            description={
              "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
            }
          />
          <Stack
            direction={{ sm: "column", md: "row", lg: "column" }}
            maxW={{ md: "100%" }}
            spacing="24px"
          >
            <Invoices name={"Invoices"} invoicesData={invoices} />
            <MartinaBirthday
              title={"Today's Martina's Birthday. Wish her the best of luck!"}
              image={CRMimage}
            />
          </Stack>
        </Stack>
      </Grid>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        spacing="24px"
        mt={{ sm: "24px", lg: "0px" }}
      >
        <Transactions title={"Your Transactions"} date={"23 - 30 March 2021"} />
        <Revenues title={"Revenus"} date={"23 - 30 March 2021"} />
      </Stack>
    </Flex>
  );
}

export default CRM;
