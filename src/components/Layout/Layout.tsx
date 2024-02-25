import { Box, Link } from '@chakra-ui/react';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <Box
      as="header"
      minHeight="40px"
      width="100%"
      borderBottom="1px solid black"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 20px"
    >
      <Box as="h1">Goods list</Box>
      <Box as="h1">
        <Link href="https://github.com/MickKrishtopa/goods-list" target="blank">
          Repo
        </Link>
      </Box>
    </Box>

    <Box as="main" flex="1 0 auto">
      {children}
    </Box>

    <Box
      minHeight="40px"
      width="100%"
      borderTop="1px solid black"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 20px"
    >
      <Box as="h1">Goods list</Box>
      <Box as="h1">
        <Link href="https://github.com/MickKrishtopa/goods-list" target="blank">
          Repo
        </Link>
      </Box>
    </Box>
  </>
);

export { Layout };
