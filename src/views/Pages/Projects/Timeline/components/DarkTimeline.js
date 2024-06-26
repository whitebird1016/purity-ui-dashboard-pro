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
import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import TimelineRow from "components/Tables/TimelineRow";
import React from "react";
import { timelineProjectsData } from "variables/general";

const DarkTimeline = () => {
  const bgCard = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.700"
  );
  return (
    <Card bg={bgCard}>
      <CardHeader mb="30px">
        <Text color="#fff" fontSize="lg" fontWeight="bold">
          Timeline dark with dashed line
        </Text>
      </CardHeader>
      <CardBody px="10px">
        <Stack direction="column" spacing="4px">
          {timelineProjectsData.map((row, index) => {
            return (
              <TimelineRow
                logo={row.logo}
                title={row.title}
                titleColor={row.titleColor}
                date={row.date}
                color={row.color}
                description={row.description}
                tags={row.tags}
                key={index}
              />
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DarkTimeline;
