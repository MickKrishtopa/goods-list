import { useEffect, useState } from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import {
  fetchGoodIdsList,
  fetchGoodItemList,
  fetchFiltredGoodIdsList,
} from '../../api/goodsApi';
import { IGood, IFilter } from '../../shared/types';

import { Layout } from '../Layout/Layout';
import { GoodList } from '../GoodList/GoodList';
import { Filters } from '../Filters/Filters';
import { Pagination } from '../Pagination/Pagination';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [goodItemList, setGoodItemList] = useState<IGood[]>([]);
  const [filter, setFilter] = useState<IFilter | null>(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchingGoodItemList = async (ids: string[]) => {
      setIsLoading(true);
      try {
        const res = await fetchGoodItemList(ids);
        setGoodItemList(res);
      } catch (error) {
        console.log(error);
        setGoodItemList([]);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchingGoodIdsList = async (page: number) => {
      setIsLoading(true);
      try {
        const res = await fetchGoodIdsList((page - 1) * 50);
        await fetchingGoodItemList(res);
      } catch (error) {
        console.log(error);
        setGoodItemList([]);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchingFiltredGoodIdsList = async (filter: IFilter) => {
      setIsLoading(true);
      try {
        const res = await fetchFiltredGoodIdsList(filter);
        await fetchingGoodItemList(res);
      } catch (error) {
        console.log(error);
        setGoodItemList([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (filter) {
      fetchingFiltredGoodIdsList(filter);
      return;
    }

    fetchingGoodIdsList(page);
  }, [filter, page]);

  return (
    <Layout>
      <Flex padding="20px" gap="40px">
        <Filters onSubmit={setFilter} />
        {isLoading ? (
          <Flex width="70%" marginTop="20px" justifyContent="center">
            <Spinner size="xl" />
          </Flex>
        ) : goodItemList.length === 0 ? (
          <Box as="h3" margin="20px auto">
            Ничего не найдено
          </Box>
        ) : (
          <Flex flexDir="column" width="100%" alignItems="center">
            {!filter && <Pagination page={page} setPage={setPage} />}
            <GoodList dataList={goodItemList} />
          </Flex>
        )}
      </Flex>
    </Layout>
  );
}

export default App;
