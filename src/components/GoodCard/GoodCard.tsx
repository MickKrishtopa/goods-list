import { Box, Card, CardBody, CardHeader, CardFooter } from '@chakra-ui/react';

import { IGood } from '../../shared/types';

const GoodCard = (props: IGood) => {
  const { id, product, price, brand } = props;

  return (
    <Box as="li">
      <Card minHeight="150px">
        <CardHeader
          padding="5px 20px"
          fontSize="20px"
          fontWeight="600"
          noOfLines={2}
          textOverflow="hidden"
        >
          {product}
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          alignItems="start"
          padding="0 20px"
        >
          <Box>Цена: {price}</Box>
          <Box>Бренд: {brand || 'Неизвестен'}</Box>
        </CardBody>
        <CardFooter padding="10px 20px" flexDirection="row-reverse" fontSize="12px">
          id: {id}
        </CardFooter>
      </Card>
    </Box>
  );
};

export { GoodCard };
