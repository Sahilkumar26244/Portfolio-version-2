import {
    Box,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Popover,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  import { Link } from "react-router-dom";
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={"white"}
          
          minH={{base:"",lg:"60px"}}
          py={{ base: "0px", lg: "0px" }}
          borderBottom={"1px solid #e2e2e2"}
          position="fixed" // Add sticky positioning
          top={"0"} // Stick to the top of the viewport
          zIndex="1000"
          w={"100%"}
          
        >
          <Flex
            w={"100%"}
            py={{ base: 2, lg: 0 }}
            justify={{ base: "start", md: "start" }}
            
          >
            <Link to="/">
              <Box
                mt={"0px"}
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
                h={"100%"}
                p={"16px 25px 15px 25px"}
              >
                <Text _hover={{
                    textDecoration: "none",
                    color: "rgb(46, 89, 186)",
                  }} fontWeight={800} fontSize={{lg:"11px",xl:"13px"}} textTransform={"uppercase"} color={"#474646"} letterSpacing={"3px"}>Sahil Kumar</Text>
              </Box>
            </Link>
  
            <Flex borderLeft={"1px solid #e2e2e2"}
              w={"80%"}
              justifyContent={"flex-start"}
              display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <DesktopNav />
              </Box>
            </Flex>
  
            {/* yha pe lgana */}
  
            {/* yha pe lgana */}
          </Flex>
          <Flex
            alignItems={"center"}
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
          >
            <IconButton
              color={"black"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={{ base: 4, lg: 6 }} h={{ base: 5, lg: 6 }} />
                ) : (
                  <HamburgerIcon
                    w={{ base: 5, lg: 10 }}
                    h={{ base: 5, lg: 10 }}
                  />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav y={"10px"} opacity={""} />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    return (
      <Stack direction={"row"} spacing={0}>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={index}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link to={navItem.href}>
                  <Box borderRight={"1px solid #e2e2e2"}
                    display={"flex"}
                    alignItems={"center"}
                    as="a"
                    pr={3}
                    pl={5}
                    fontSize={{lg:"13px",xl:"13px"}}
                    fontWeight={400}
                    letterSpacing={"3px"}
                    color={"#646464"}
                    opacity={1}
                    _hover={{
                      textDecoration: "none",
                      color: "rgb(46, 89, 186)",
                    }}
                  >
                    {navItem.label}
                    
                  </Box>
                  
                </Link>
              </PopoverTrigger>
  
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#8bc53f", "gray.900") }}
      >
        <Stack
          direction={"row"}
          align={"center"}
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box>
            <Link to={href}>
              <Text transition={"all .3s ease"} fontWeight={500}>
                {label}
              </Text>
            </Link>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  const MobileNav = ({ y, opacity }) => {
    return (
      <Stack
        boxShadow={"rgb(38, 57, 77) 0px 20px 30px -10px;"}
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "flex", xl: "none" }}
        mt={{ base: "60px", md: "60px", lg: "110px" }}
        position="fixed" // Add sticky positioning
        top={y} // Stick to the top of the viewport
        zIndex="1000"
        as="nav"
        w={"100%"}
        opacity={opacity}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <MobileNavItem key={index} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={0} onClick={children && onToggle}>
        <Box
          pl={{ lg: 10 }}
          py={2}
          
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            <a as="a"
            href={href ?? '#'}>
              <Text
              textTransform={"uppercase"} fontSize={{base:"0.8em",lg:"0.8em",xl:"1.0em"}} color={"#3c3b3b"} fontWeight={500} letterSpacing={"0.25em"}
              >
                {label}
              </Text>
            </a>
  
          
          </Flex>
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={0}
            ml={{ lg: 10 }}
            mr={{ lg: 10 }}
            borderTop={"1px solid lightgrey"}
            align={"start"}
          >
            {children &&
              children.map((child, index) => (
                <Box
                  fontSize={{ lg: "25px" }}
                  fontWeight={600}
                  pl={5}
                  w={"100%"}
                  as="a"
                  key={index}
                  py={2}
                  borderBottom={"1px solid lightgrey"}
                >
                  <Link to={child.href}>{child.label}</Link>
                </Box>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "ABOUT",
      href:"/about"
    },
    {
      label: "RESUME",
      href: "/resume",
    },
    {
      label: "PROJECTS",
      href: "/projects",
    },
    {
        label: "CONTACT",
        href: "/contact",
      },
  ];
  
  export default Navbar;
  