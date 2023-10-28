import { gql } from "@apollo/client";

export const GET_COMPLETION = gql`
  mutation GetCompletion($prompt: String!) {
    getCompletion(prompt: $prompt) {
      content
    }
  }
`;
