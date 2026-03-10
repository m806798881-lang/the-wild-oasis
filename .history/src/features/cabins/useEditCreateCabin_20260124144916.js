export default function useEditCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: ({ newCabin, id }) => editCreateCabin(newCabin, id),
    onSuccess: () => {
      toast.success("new cabin was successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return {};
}
