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
    Button,
    Flex,
    Grid,
    Icon, Text,
    useColorModeValue
} from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { brandCardsData } from "variables/general";
import BrandCard from "./components/BrandCard";
import Header from "../Overview/components/Header";

function Projects() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
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
      <Flex direction="column" mb="44px" mt={{ sm: "16px", lg: "0px" }}>
        <Text fontSize="xl" text={textColor} fontWeight="bold" mb="16px">
          Some of Our Awesome Projects
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          This is the paragraph where you can write more details about your
          projects. Keep you user engaged by providing meaningful information.
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, auto)",
          lg: "repeat(3, auto)",
        }}
        templateRows={{ md: "repeat(3, auto)", lg: "repeat(2, auto)" }}
        gap="30px"
      >
        {brandCardsData.map((brand, idx) => {
          return (
            <BrandCard
              icon={brand.icon}
              title={brand.title}
              avatars={brand.avatars}
              description={brand.description}
              participants={brand.participants}
              date={brand.date}
              key={idx}
            />
          );
        })}
        <Card>
          <CardBody h="100%">
            <Flex w="100%" h="100%">
              <Button variant="no-hover" w="100%" h="100%">
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  color="gray.500"
                >
                  <Icon
                    as={BsPlus}
                    w="30px"
                    h="30px"
                    mb="12px"
                    fontWeight="bold"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    Create a New Project
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Projects;
