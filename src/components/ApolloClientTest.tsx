import { gql, useMutation, useSubscription } from "@apollo/client";

const STREAM_COMPLETION = gql`
    subscription StreamCompletion {
        streamCompletion {
            content
        }
    }
`;

const GET_COMPLETION = gql`
    mutation GetCompletion($prompt: String!) {
        getCompletion(prompt: $prompt) {
            content
        }
    }
`;

const prompt =
    "Hola como estas al final de la respuesta respondeme con la palabra 'redirigir_agente'";

export const ApolloClientTest = () => {
    const { data } = useSubscription(STREAM_COMPLETION);

    const [addTodo, { data: data2, loading: loading2, error }] =
        useMutation(GET_COMPLETION);

    if (loading2) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

    if (data) {
        console.log(data);
        console.log(data2);
    }

    const handleClickSend = () => {
        addTodo({ variables: { prompt: prompt } });
    };

    return (
        <>
            <span className="text-3xl font-bold underline">Hola mundo</span>
            <button onClick={handleClickSend}>Send</button>
        </>
    );
};
