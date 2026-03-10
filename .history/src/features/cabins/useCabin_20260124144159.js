export default function useCabin() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ["cabins"], queryFn: getCabins });
  return { isLoading, cabins };
}
