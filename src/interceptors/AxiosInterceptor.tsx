"use client";
import { useEffect } from "react";
import { AxiosInterceptor } from "./axios.interceptor";

export const AxiosInterceptorProvider = ({ children }: any) => {
  useEffect(() => {
    try {
      AxiosInterceptor();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <h1>hello</h1>
      {children}
    </>
  );
};
