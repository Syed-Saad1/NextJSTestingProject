"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAction } from "@/app/action/userServerAction";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => createUserAction(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
