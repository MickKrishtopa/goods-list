import { SimpleGrid } from '@chakra-ui/react';

import { GoodCard } from '../GoodCard/GoodCard';
import { IGood } from '../../shared/types';

interface IProps {
  dataList: IGood[];
}

const GoodList = (props: IProps) => {
  const { dataList } = props;
  return (
    <SimpleGrid
      width="100%"
      as="ul"
      listStyleType="none"
      minChildWidth="250px"
      spacing={10}
    >
      {dataList.map((card) => (
        <GoodCard key={card.id} {...card} />
      ))}
    </SimpleGrid>
  );
};

export { GoodList };
