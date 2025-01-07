import { HfInference } from '@huggingface/inference'

const hf = new HfInference('your access token')

const openai = new HfInference(OPENAI_TOKEN).endpoint("https://api.openai.com");

let out = "";
for await (const chunk of openai.chatCompletionStream({
  model: "gpt-3.5-turbo",
  messages: [
    { role: "user", content: "Complete the equation 1+1= ,just the answer" },
  ],
  max_tokens: 500,
  temperature: 0.1,
  seed: 0,
})) {
  if (chunk.choices && chunk.choices.length > 0) {
    out += chunk.choices[0].delta.content;
  }
}

// For mistral AI:
// endpointUrl: "https://api.mistral.ai"
// model: "mistral-tiny" 