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
import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import DarkTimeline from "./components/DarkTimeline";
import LightTimeline from "./components/LightTimeline";

function Timeline() {
  return (
    <Stack
      direction={{ sm: "column", lg: "row" }}
      spacing="24px"
      pt={{ sm: "125px", lg: "75px" }}
    >
      <LightTimeline />
      <DarkTimeline />
    </Stack>
  );
}

export default Timeline;
