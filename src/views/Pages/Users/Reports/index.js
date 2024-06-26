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
import { Flex, Grid, Icon } from "@chakra-ui/react";
import bgCardReports from "assets/img/background-card-reports.png";
import { CartIcon, RocketIcon } from "components/Icons/Icons";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { tablesReportsData } from "variables/general";
import ReportsCard from "./components/ReportsCard";
import ReportsTable from "./components/ReportsTable";
import Reviews from "./components/Reviews";

function Reports() {
  return (
    <Flex direction="column" pt={{ base: "150px", lg: "75px" }}>
      <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap="24px" mb="24px">
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)" }}
          templateRows={{ md: "repeat(2, 1fr)" }}
          gap="24px"
        >
          <ReportsCard
            backgroundImage={bgCardReports}
            title={"Users Active"}
            number={1600}
            icon={<Icon as={FaUser} w="25px" h="25px" color="blue.900" />}
            percentage={"+55%"}
          />
          <ReportsCard
            backgroundImage={bgCardReports}
            title={"Click Events"}
            number={357}
            icon={<Icon as={RocketIcon} w="25px" h="25px" color="blue.900" />}
            percentage={"+124%"}
          />
          <ReportsCard
            backgroundImage={bgCardReports}
            title={"Purchases"}
            icon={<Icon as={CartIcon} w="25px" h="25px" color="blue.900" />}
            number={2340}
            percentage={"+14%"}
          />
          <ReportsCard
            backgroundImage={bgCardReports}
            title={"Likes"}
            icon={<Icon as={AiFillLike} w="25px" h="25px" color="blue.900" />}
            number={940}
            percentage={"+90%"}
          />
        </Grid>
        <Reviews />
      </Grid>
      <ReportsTable data={tablesReportsData} />
    </Flex>
  );
}

export default Reports;
