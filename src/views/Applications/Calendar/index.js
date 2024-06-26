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
import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Grid,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import EventCalendar from "components/Calendars/EventCalendar";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import { ClockIcon, DocumentIcon, WalletIcon } from "components/Icons/Icons";
import { VSeparator } from "components/Separator/Separator";
import React from "react";
import { FaPalette, FaShip } from "react-icons/fa";
import { calendarDataCalendar } from "variables/calendar";
import {
  lineChartDataCalendar,
  lineChartOptionsCalendar,
} from "variables/charts";
import UpcomingEvents from "./components/UpcomingEvents";
import Productivity from "./components/Productivity";

function Calendar() {
  const textColor = useColorModeValue("gray.700", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textGray = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction="column" pt={{ sm: "125px", lg: "75px" }}>
      <Flex w="100%" align="flex-end" justify="flex-end" mb="24px">
        <Flex
          ms="auto"
          align="center"
          justify="center"
          me="25px"
          mb={{ sm: "16px", md: "50px" }}
        >
          <Flex direction="column" me="25px">
            <Text fontSize="sm" color={textGray} fontWeight="bold" mb="8px">
              Team Members:
            </Text>
            <AvatarGroup size="sm">
              <Avatar src={avatar1} />
              <Avatar src={avatar2} />
              <Avatar src={avatar3} />
            </AvatarGroup>
          </Flex>
          <VSeparator h="56px" me="25px" />
          <IconButton
            w="40px"
            h="40px"
            colorScheme="teal"
            aria-label="Search database"
            icon={<AddIcon w="12px" h="12px" />}
          />
        </Flex>
      </Flex>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1fr" }} gap="24px">
        <Card minH="570px">
          <CardHeader mb="6px">
            <Flex direction="column">
              <Text color={textColor} fontSize="lg" fontWeight="bold" mb="6px">
                Calendar
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                Wednesday, 2021
              </Text>
            </Flex>
          </CardHeader>
          <CardBody position="relative" display="block" height="100%">
            <EventCalendar
              initialDate="2021-10-01"
              calendarData={calendarDataCalendar}
            />
          </CardBody>
        </Card>
        <Stack
          direction={{ sm: "column", md: "row", lg: "column" }}
          spacing="24px"
        >
          <UpcomingEvents />
          <Productivity />
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Calendar;
