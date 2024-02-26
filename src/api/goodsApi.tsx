import { isAxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from './index';

import { IFilter, IGood } from '../shared/types';

export async function fetchGoodIdsList(offset: number): Promise<string[]> {
  const body = {
    action: 'get_ids',
    params: { offset: offset, limit: 50 },
  };

  try {
    const response = await axiosInstance.post('', body);
    const filtredResponse = response.data.result;
    return filtredResponse;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error('Не удалось получить данные');
    }
  }
}

export async function fetchFiltredGoodIdsList(filter: IFilter): Promise<string[]> {
  const body = {
    action: 'filter',
    params: filter,
  };

  try {
    const response = await axiosInstance.post('', body);
    const filtredResponse = response.data.result;
    return filtredResponse;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error('Не удалось получить данные');
    }
  }
}

export async function fetchGoodItemList(ids: string[]): Promise<IGood[]> {
  const body = {
    action: 'get_items',
    params: { ids: ids },
  };

  try {
    const response: AxiosResponse<{ result: IGood[] }> = await axiosInstance.post(
      '',
      body,
    );

    const filtredResponse = response.data.result.filter(
      (item, index, arr) => arr.findIndex((obj) => obj.id === item.id) === index,
    );
    return filtredResponse;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error('Не удалось получить данные');
    }
  }
}
