import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AuthService } from "@/services";
import { MutationKeys, Routes } from "@/constants";
import { useAuthStore } from "@/store";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const setUserInfo = useAuthStore((state) => state?.setUserInfo);

  const { mutate: sendOtpMutate, isLoading: sendOtpIsLoading } = useMutation(
    [MutationKeys.MUTATION_SEND_OTP_FOR_OWNER],
    (body: TSendOtpForOwnerBody) => AuthService.postSendOtpForOwner(body)
  );

  const { mutate: loginMutate, isLoading: loginIsLoading } = useMutation(
    [MutationKeys.MUTATION_LOGIN_FOR_OWNER],
    (body: TLoginForOwnerBody) => AuthService.postLoginForOwner(body)
  );

  const onSendOtpForOwner = useCallback(
    async (form: TSendOtpForOwnerBody, cb: (error: any) => void) => {
      sendOtpMutate(form, {
        onError: (error: any) => {
          cb(error.message);
        },
        onSuccess: async (data: TResponse<TSendOtpForOwnerResponse>) => {
          const userInfo = {
            userId: data.data.userId,
            phone: form.phone,
          };

          setUserInfo({
            ...userInfo,
          });

          router.push(Routes.LOGIN_OTP);
          return;
        },
      });
    },
    [setUserInfo, sendOtpMutate, router]
  );

  const onLoginForOwner = useCallback(
    async (form: TLoginForOwnerBody, cb: (error: any) => void) => {
      loginMutate(form, {
        onError: (error: any) => {
          cb(error.message);
        },
        onSuccess: async (data: TResponse<TLoginForOwnerResponse>) => {
          // const userInfo = {
          //   userId: data.data.userId,
          //   phone: form.phone,
          // };

          // setUserInfo({
          //   ...userInfo,
          // });

          router.push(Routes.HOME);
          return;
        },
      });
    },
    [loginMutate, router]
  );

  return {
    sendOtpIsLoading,
    loginIsLoading,
    onSendOtpForOwner,
    onLoginForOwner,
  };
};
