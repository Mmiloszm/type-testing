export type TextApiResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
};

export type Choice = {
  text: string;
  index: number;
  logprobs: any;
  finish_reason: string;
};

export type Usage = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};
