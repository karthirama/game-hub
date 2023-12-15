import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(
    () => {
      isLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          isLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          isLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
