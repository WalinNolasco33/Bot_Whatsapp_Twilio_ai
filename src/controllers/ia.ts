import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.Token_hugging);

export const createTextIa = async (text: string) => {
  try {
    const response = await hf.textGeneration({
      model: "google/flan-t5-large",
      inputs: text,
    });

    console.log(response);
    return response;
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  }
};
