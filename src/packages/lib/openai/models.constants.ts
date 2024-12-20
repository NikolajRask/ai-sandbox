export const OPENAI_MODELS = {
    "gpt-3.5-turbo": {
      name: "gpt-3.5-turbo",
      tokenLimit: 4096,
      description: "A variant of GPT-3 optimized for conversational tasks.",
      apiVersion: "v1"
    },
    "gpt-4": {
      name: "gpt-4",
      tokenLimit: 8192,
      description: "A powerful and more capable model for a wide range of tasks.",
      apiVersion: "v1"
    },
    "gpt-4-0314": {
      name: "gpt-4-0314",
      tokenLimit: 8192,
      description: "GPT-4 with a specific snapshot version (0314).",
      apiVersion: "v1"
    },
    "gpt-4-32k": {
      name: "gpt-4-32k",
      tokenLimit: 32768,
      description: "GPT-4 with an extended token limit (32k tokens).",
      apiVersion: "v1"
    },
    "gpt-4-32k-0314": {
      name: "gpt-4-32k-0314",
      tokenLimit: 32768,
      description: "GPT-4 with an extended token limit and a specific snapshot version (0314).",
      apiVersion: "v1"
    },
    "gpt-3.5-turbo-0301": {
      name: "gpt-3.5-turbo-0301",
      tokenLimit: 4096,
      description: "GPT-3.5 variant with a specific snapshot version (0301).",
      apiVersion: "v1"
    },
    "text-davinci-003": {
      name: "text-davinci-003",
      tokenLimit: 4096,
      description: "Text generation model optimized for a wide range of tasks.",
      apiVersion: "v1"
    },
    "davinci-codex": {
      name: "davinci-codex",
      tokenLimit: 4000,
      description: "A powerful code generation model that can handle programming tasks.",
      apiVersion: "v1"
    },
    "curie": {
      name: "curie",
      tokenLimit: 2048,
      description: "A highly capable language model, smaller and faster than Davinci.",
      apiVersion: "v1"
    },
    "babbage": {
      name: "babbage",
      tokenLimit: 2048,
      description: "A less powerful but faster and more cost-effective model.",
      apiVersion: "v1"
    },
    "ada": {
      name: "ada",
      tokenLimit: 2048,
      description: "The smallest and most efficient model for simple tasks.",
      apiVersion: "v1"
    },
    "davinci": {
      name: "davinci",
      tokenLimit: 4096,
      description: "The most powerful GPT-3 model for general use cases.",
      apiVersion: "v1"
    }
  };
  