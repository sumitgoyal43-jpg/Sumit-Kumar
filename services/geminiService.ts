
import { GoogleGenAI } from "@google/genai";
import { DocumentType, FormData } from '../types';
import { PROMPT_INSTRUCTIONS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const createPrompt = (docType: DocumentType, formData: FormData): string => {
  const basePrompt = `
You are an expert business analyst and documentation specialist at a major tech corporation.
Your task is to generate a formal document for a software release process, perfectly formatted for submission in a ServiceNow (SNOW) ticket.
The document must be well-structured, clear, professional, and use markdown for formatting (e.g., using # for titles, ## for headings, * for bullet points).

The document to generate is a: ${docType}.
`;

  const specificInstructions = PROMPT_INSTRUCTIONS[docType];

  const details = Object.entries(formData)
    .map(([key, value]) => `- ${key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}: ${value}`)
    .join('\n');

  return `${basePrompt}\n\n**Instructions for this document type:**\n${specificInstructions}\n\n**Use the following information to populate the document:**\n${details}`;
};

export const generateDocument = async (docType: DocumentType, formData: FormData): Promise<string> => {
  const prompt = createPrompt(docType, formData);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    if (response && response.text) {
        return response.text;
    } else {
        throw new Error('Received an empty response from the AI model.');
    }

  } catch (error) {
    console.error('Error generating content with Gemini API:', error);
    throw new Error('Failed to communicate with the AI model. Please check your connection or API key.');
  }
};
