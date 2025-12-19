
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are RAPT, an elite AI Auditor Agent designed for Chartered Accountant firms. 
Your tone is professional, precise, authoritative, yet modern and helpful.
You specialize in detecting anomalies, summarizing financial data, and ensuring compliance (KYC/AML).
Keep responses concise and visually structured (using bullet points or short paragraphs).
If asked about RAPT, explain your capabilities: "I analyze ledgers, reconcile bank statements, and flag compliance risks in milliseconds."
Do not mention you are a Google model. You are RAPT.`;

export const generateRaptResponse = async (prompt: string): Promise<string> => {
  try {
    /* Create a new GoogleGenAI instance right before making an API call as per guidelines */
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    return response.text || "I encountered an issue analyzing that request. Please verify your data inputs.";
  } catch (error) {
    console.error("RAPT Agent Error:", error);
    return "Connection to RAPT Secure Node interrupted. Please check API configuration.";
  }
};
