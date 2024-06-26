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
    Avatar,
    AvatarGroup, Box,
    Button,
    Flex, Icon,
    Image,
    Input, Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import teamsImage from "assets/img/teams-image.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { HSeparator } from "components/Separator/Separator.js";
import React from "react";
import { AiFillLike, AiOutlinePlus } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

const Post = () => {

    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    
  return (
    <Card alignSelf={{ lg: "flex-start", "2xl": "stretch" }}>
            <CardHeader w="100%">
              <Flex justify="space-between" align="center" w="100%">
                <Flex>
                  <Box>
                    <Avatar
                      src={avatar4}
                      w="40px"
                      h="40px"
                      borderRadius="12px"
                      me="15px"
                    />
                  </Box>
                  <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Esthera Jackson
                    </Text>
                    <Text fontSize="sm" color="gray.500" fontWeight="normal">
                      3 days ago
                    </Text>
                  </Flex>
                </Flex>
                <Button variant="no-hover" bg="teal.300" p="8px 32px">
                  <Flex align="center" color="#fff" justifyContent="center">
                    <Icon
                      as={AiOutlinePlus}
                      w="18px"
                      h="18px"
                      fontWeight="bold"
                      me="4px"
                    />
                    <Text fontSize="md" fontWeight="bold" mt="4px">
                      Follow
                    </Text>
                  </Flex>
                </Button>
              </Flex>
            </CardHeader>
            <HSeparator my="16px" />
            <CardBody>
              <Flex direction="column">
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mb="24px"
                >
                  Personal profiles are the perfect way for you to grab their
                  attention and persuade recruiters to continue reading your CV
                  because you’re telling them from the off exactly why they should
                  hire you.
                </Text>
                <Image
                  src={teamsImage}
                  minW={{ sm: "270px" }}
                  h="auto"
                  borderRadius="12px"
                />
                <Flex justify="space-between" align="center" my="6px">
                  <Stack spacing="20px" direction="row" my="18px">
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={AiFillLike}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">1502</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={FaCommentDots}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">36</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={IoMdShareAlt}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">12</Text>
                    </Flex>
                  </Stack>
                  <Flex
                    align="center"
                    display={{ sm: "none", md: "flex" }}
                    direction="row"
                  >
                    <AvatarGroup size="xs" me="6px">
                      <Avatar src={avatar1} />
                      <Avatar src={avatar2} />
                      <Avatar src={avatar5} />
                      <Avatar src={avatar8} />
                    </AvatarGroup>
                    <Text color="gray.500" fontWeight="normal" fontSize="sm">
                      and 30+ more
                    </Text>
                  </Flex>
                </Flex>
                <HSeparator mb="26px" />
                <Flex mb="30px">
                  <Box>
                    <Avatar src={avatar7} w="50px" h="50px" me="15px" />
                  </Box>
                  <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Michael Lewis
                    </Text>
                    <Text
                      color="gray.500"
                      fontWeight="normal"
                      fontSize="md"
                      mt="6px"
                      mb="14px"
                    >
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves!
                    </Text>
                    <Flex>
                      <Flex align="center" color="gray.500" me="21px">
                        <Icon
                          as={AiFillLike}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">3 likes</Text>
                      </Flex>
                      <Flex align="center" color="gray.500">
                        <Icon
                          as={IoMdShareAlt}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">2 shares</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mb="30px">
                  <Box>
                    <Avatar src={avatar10} w="50px" h="50px" me="15px" />
                  </Box>
                  <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Jessica Stones
                    </Text>
                    <Text
                      color="gray.500"
                      fontWeight="normal"
                      fontSize="md"
                      mt="6px"
                      mb="14px"
                    >
                      Society has put up so many boundaries, so many limitations
                      on what’s right and wrong that it’s almost impossible to get
                      a pure thought out. It’s like a little kid, a little boy.
                    </Text>
                    <Flex>
                      <Flex align="center" color="gray.500" me="21px">
                        <Icon
                          as={AiFillLike}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">10 likes</Text>
                      </Flex>
                      <Flex align="center" color="gray.500">
                        <Icon
                          as={IoMdShareAlt}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">1 share</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mb="30px">
                  <Box>
                    <Avatar src={avatar8} w="50px" h="50px" me="15px" />
                  </Box>
                  <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Anthony Joshua
                    </Text>
                    <Text
                      color="gray.500"
                      fontWeight="normal"
                      fontSize="md"
                      mt="6px"
                      mb="14px"
                    >
                      It's all about work ! Great ideas mean nothing if they
                      aren't realised by hungry, desiring people.
                    </Text>
                    <Flex>
                      <Flex align="center" color="gray.500" me="21px">
                        <Icon
                          as={AiFillLike}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">42 likes</Text>
                      </Flex>
                      <Flex align="center" color="gray.500">
                        <Icon
                          as={IoMdShareAlt}
                          w="18px"
                          h="18px"
                          me="4px"
                          cursor="pointer"
                        />
                        <Text fontSize="md">6 shares</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex align="center">
                  <Box>
                    <Avatar src={avatar4} w="50px" h="50px" me="15px" />
                  </Box>
                  <Input
                    placeholder="Write your comment..."
                    borderRadius="15px"
                    _focus={{ borderColor: "teal.300" }}
                  />
                </Flex>
              </Flex>
            </CardBody>
          </Card>
  )
}

export default Post