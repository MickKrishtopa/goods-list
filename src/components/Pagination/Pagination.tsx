import { Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface IProps {
  page: number;
  setPage: (newPage: number) => void;
}
const Pagination = ({ page, setPage }: IProps) => (
  <Flex margin="10px auto" gap="10px">
    <Button onClick={() => (page > 1 ? setPage(page - 1) : null)}>
      <ArrowBackIcon />
    </Button>
    <Flex as="span" justifyContent="center" alignItems="center">
      {page}
    </Flex>
    <Button onClick={() => setPage(page + 1)}>
      <ArrowForwardIcon />
    </Button>
  </Flex>
);

export { Pagination };
