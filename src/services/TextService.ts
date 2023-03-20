import { TextApiResponse } from "../types/TextApiResponse";

const getText = async ({
  queryKey,
}: {
  queryKey: string[];
}): Promise<TextApiResponse> => {
  const apiKey: string = import.meta.env.VITE_TEXT_API_KEY as string;
  const subject = queryKey[1];
  const apiRes = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Write a text about ${subject} for 100 words`,
      max_tokens: 200,
      temperature: 0,
    }),
  });

  if (!apiRes.ok) {
    throw new Error("error"); //todo
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return apiRes.json();
};

export default getText;
