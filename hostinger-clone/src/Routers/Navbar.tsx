import {Box,Flex,Text,IconButton,Stack,Collapse,Icon,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure} from '@chakra-ui/react'
import {HamburgerIcon,CloseIcon,ChevronDownIcon,ChevronRightIcon} from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={'#1857ab'}
        color={'#FAF9F6'}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        align={'center'}
        justifyContent={'space-between'}
        >

        
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Text
            ml={'10%'}
            fontWeight={750}
            fontSize={'4xl'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={'white'}>
            lil
          </Text>
          <Box border={'8px solid white'} w={'30px'} h={'20px'} borderRadius={'35%'} mt={'22px'} ml={'1px'}>
            <Box border={'5px solid #1857ab'} w={'18px'} h={'5px'} borderRadius={'40%'} mt={'-2px'} ml={'-2px'}></Box>
          </Box>
        
        </Flex>

        <Box display={{ base: 'flex', md: 'none' }} mr={'8%'}>
          <Box onClick={onToggle} >
            {isOpen ? <CloseIcon w={5} h={5} color={'#FAF9F6'} /> : <HamburgerIcon w={8} h={8} color={'#FAF9F6'} />}
          </Box>
        </Box>

        <Flex display={{ base: 'none', md: 'flex' }} mr={"8%"} >
            <DesktopNav />
          </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={100}
                color={'#FAF9F6'}
                textUnderlineOffset={'6px'}
                _hover={{
                  textDecoration: 'underline',
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>

      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#FAF9F6' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}  bg={'#1857ab'}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        display={'flex'}
        mr={'2%'}
        justifyContent='end'
        alignItems="center"
        textUnderlineOffset={'6px'}
        color={'#FAF9F6'}
        _hover={{
          textDecoration: 'underline',
        }}>
        <Text  color={"#FAF9F6"} >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'Contacts',
    href: '#',
  },
]