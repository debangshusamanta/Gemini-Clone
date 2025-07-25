// Install the SDK first using: npm install @google/generative-ai

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDajob2lxKHQkZ3JhfSGxLCn2Bh4c-Z8W4");

// Main function to send prompt and get response
async function main(prompt) {
  try {
    // Get the model (Gemini 1.5 Flash is faster and cheaper)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Send the prompt
    const result = await model.generateContent(prompt);

    // Extract and return the text response
    const response = await result.response;
    const text = response.text();
    
    // console.log(text);
    return text;

  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
}

export default main;
