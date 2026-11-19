"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAction } from "@/app/action/userServerAction";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await createUserAction(data);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
