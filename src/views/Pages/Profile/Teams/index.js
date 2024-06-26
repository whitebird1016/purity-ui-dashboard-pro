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

import { Flex, Grid, Stack, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import { InvisionLogo, SlackLogo } from "components/Icons/Icons";
import React from "react";
import Header from "views/Pages/Profile/Overview/components/Header";
import Post from "views/Pages/Profile/Teams/components/Post";
import ProfileStats from "views/Pages/Profile/Teams/components/ProfileStats";
import Stories from "views/Pages/Profile/Teams/components/Stories";
import Meeting from "./components/Meeting";

function Teams() {
  // Chakra color mode

  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
      />
      <Stories />
      <Grid
        templateColumns={{ sm: "1fr", lg: "2.1fr 1fr" }}
        templateRows="auto 1fr"
        mt="24px"
        gap="24px"
      >
        <Post />
        <Stack direction="column" spacing="24px">
          <ProfileStats
            title={"Digital Marketing"}
            description={
              "A group of people who collectively are responsible for all of the work necessary to produce working, validated assets."
            }
            team={"MARKETING TEAM"}
          />
          <ProfileStats
            title={"Design"}
            description={
              "Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too."
            }
            team={"DESIGN TEAM"}
          />
          <Meeting
            title={"Slack Meet"}
            icon={<SlackLogo w="34px" h="34px" me="14px" />}
            date={"11:00 AM"}
            description={"You have an upcoming meet for Marketing Planning"}
            id={"902-128-281"}
          />
          <Meeting
            title={"Invision"}
            icon={<InvisionLogo w="34px" h="34px" me="14px" />}
            date={"04:50 PM"}
            description={"You have an upcoming video call for Chakra Design"}
            id={"902-128-281"}
          />
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Teams;
