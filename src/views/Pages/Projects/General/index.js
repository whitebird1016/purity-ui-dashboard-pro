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
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons";
import React from "react";
import Earnings from "./components/Earnings";
import GeneralCard from "./components/GeneralCard";
import MiniStatistics from "./components/MiniStatistics";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import ToDoList from "./components/ToDoList";

function General() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex direction="column" pt={{ sm: "125px", lg: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1fr 1.7fr 1.5fr" }}
        gap="24px"
        mb="24px"
      >
        <Earnings />
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          templateRows="repeat(2, 90px)"
          gap="24px"
        >
          <MiniStatistics
            title={"Today's Moneys"}
            amount={"$53,000"}
            percentage={55}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"Today's Users"}
            amount={"2,300"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"New Clients"}
            amount={"+3,020"}
            percentage={-14}
            icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"Total Sales"}
            amount={"$173,000"}
            percentage={8}
            icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
        </Grid>
        <GeneralCard />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.85fr 1fr", xl: "70% 30%" }}
        gap="24px"
      >
        <ToDoList />
        <Flex direction="column">
          <Tasks />
          <Projects />
        </Flex>
      </Grid>
    </Flex>
  );
}

export default General;
