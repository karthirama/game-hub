import useData from "./useData";

export interface PlatformList {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error, loading } = useData<PlatformList>(
    "/platforms/lists/parents"
  );
  return { data, error, loading };
};

export default usePlatforms;
