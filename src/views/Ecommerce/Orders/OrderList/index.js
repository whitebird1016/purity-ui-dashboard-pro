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
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import SearchTable2 from "components/Tables/SearchTable2";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { columnsData2 } from "variables/columnsData";
import tableData2 from "variables/tableData2.json";

function OrderList() {
  return (
    <Flex direction="column" pt={{ sm: "125px", md: "75px" }}>
      <Flex
        direction={{ sm: "column", md: "row" }}
        justify="space-between"
        align="center"
        w="100%"
        mb="24px"
      >
        <Button
          variant="no-hover"
          bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          w="125px"
          h="35px"
          color="#fff"
          fontSize="xs"
          fontWeight="bold"
          alignSelf={{ sm: "flex-start", lg: null }}
          mb={{ sm: "12px", md: "0px" }}
        >
          NEW ORDER
        </Button>
        <Stack
          direction="row"
          spacing="10px"
          alignSelf={{ sm: "flex-start", lg: "auto" }}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoIosArrowDown />}
              color="gray.700"
              w="125px"
              h="35px"
              bg="#fff"
              fontSize="xs"
            >
              FILTERS
            </MenuButton>
            <MenuList>
              <MenuItem color="gray.500">Status: Paid</MenuItem>
              <MenuItem color="gray.500">Status: Refunded</MenuItem>
              <MenuItem color="gray.500">Status: Canceled</MenuItem>
              <MenuDivider />
              <MenuItem color="red.300">Remove filter</MenuItem>
            </MenuList>
          </Menu>
          <Button
            variant="no-hover"
            bg="#fff"
            w="125px"
            h="35px"
            color="gray.700"
            fontSize="xs"
            fontWeight="bold"
          >
            EXPORT CSV
          </Button>
        </Stack>
      </Flex>
      <Card px="0px">
        <CardBody>
          <SearchTable2 tableData={tableData2} columnsData={columnsData2} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default OrderList;
