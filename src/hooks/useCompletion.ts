import { useMutation } from "@apollo/client";
import { useEffect } from "react";
// import { useState } from "react";
// import { STREAM_COMPLETION } from "../graphql/subscriptions";
import { GET_COMPLETION } from "../graphql/mutations";

export const useCompletion = () => {
  const [getCompletion, { loading, data, error }] = useMutation(GET_COMPLETION);

  const handleClickSend = (prompt: string) => {
    console.log("Submitting...");
    getCompletion({ variables: { prompt: prompt } });
    console.log(data);
  };

  return {
    data,
    loading,
    error,
    handleClickSend,
  };
};
