import { useReducer, useRef, useEffect, useState } from 'react';
import { message } from 'antd';

export function usePrevious(value: any) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Similar to setState of class component
export const useSet = (initState: any) => {
  return useReducer((state: any, newState: any) => {
    return { ...state, ...newState };
  }, initState);
};

/**
 * In order to prevent the submit button from being clicked continuously in the business, we will manually set setLoading true and setLoading false, which is very troublesome
 * So I wrote this hook to save trouble
 * @returns
 */
type TCallback = () => Promise<any>;
type TRequestLoading = () => [boolean, (callback: TCallback) => void];

export const useLoadingRequest: TRequestLoading = () => {
  const [loading, setLoading] = useState(false);

  const handleRequest = async (callback: TCallback) => {
    try {
      setLoading(true);
      await callback();
    } catch (error: any) {
      message.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return [loading, handleRequest];
};
