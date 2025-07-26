import { useMutation } from "convex/react";
import { useState } from "react";

function useApiMutation(mutationFn: any) {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFn);

  function mutate(payload: any) {
    setPending(true);

    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return { mutate, pending };
}

export default useApiMutation;
