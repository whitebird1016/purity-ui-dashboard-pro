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
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const Reviews = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card>
      <CardHeader mb="24px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Reviews
        </Text>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Stack direction="column" spacing="28px" w="100%" mb="40px">
            <Flex direction="column">
              <Flex justify="space-between" mb="8px">
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  Positive Reviews
                </Text>
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  80%
                </Text>
              </Flex>
              <Progress
                colorScheme="teal"
                size="sm"
                value={80}
                borderRadius="15px"
              ></Progress>
            </Flex>
            <Flex direction="column">
              <Flex justify="space-between" mb="8px">
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  Neutral Reviews
                </Text>
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  17%
                </Text>
              </Flex>
              <Progress
                colorScheme="gray"
                size="sm"
                value={17}
                borderRadius="15px"
              ></Progress>
            </Flex>
            <Flex direction="column">
              <Flex justify="space-between" mb="8px">
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  Negative Reviews
                </Text>
                <Text fontSize="md" color="gray.400" fontWeight="500">
                  3%
                </Text>
              </Flex>
              <Progress
                colorScheme="red"
                size="sm"
                value={3}
                borderRadius="15px"
              ></Progress>
            </Flex>
          </Stack>
          <Flex
            justify="space-between"
            w="100%"
            direction={{ sm: "column", lg: "row" }}
          >
            <Text
              color="gray.500"
              fontSize="md"
              maxW={{ lg: "65%" }}
              mb={{ sm: "16px", lg: "0px" }}
            >
              More than{" "}
              <Text as="span" color={textColor} fontWeight="bold">
                1,500,000 developers
              </Text>{" "}
              used Creative Tim's products and over{" "}
              <Text as="span" color={textColor} fontWeight="bold">
                700,000 projects
              </Text>{" "}
              were created.
            </Text>
            <Button
              variant="no-hover"
              borderRadius="12px"
              bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
              p="12px 24px"
              alignSelf="flex-end"
            >
              <Text color="#fff" fontSize="xs">
                VIEW ALL REVIEWS
              </Text>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Reviews;
