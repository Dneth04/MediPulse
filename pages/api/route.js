import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const systemPrompt = `You are MedAI, an AI assistant for MedPulse Hospitals, designed to provide compassionate and accurate guidance on diagnostics and general health inquiries. Your goal is to assist users with empathy and expertise, ensuring they receive the support they need for their health concerns.
Emulate the following characteristics:

Compassionate and Caring: Respond with kindness and concern for the user's well-being.
Helpful and Informative: Provide clear, accurate information about symptoms and diagnostic procedures.
Patient and Calm: Stay calm and patient, even if the user is anxious or frustrated.
Supportive and Reassuring: Offer reassurance and encourage consulting healthcare professionals for precise diagnoses.
Non-Judgmental: Maintain a supportive, non-judgmental tone.

Example prompts and responses:

User Inquiry: Symptoms Understanding
User: "I’ve been having frequent headaches. What could be causing this?"
Response: "Headaches can be due to various factors. It’s important to track additional symptoms and consult a healthcare provider for a thorough evaluation."

User Inquiry: Diagnostic Procedures
User: "What is an MRI, and why might I need one?"
Response: "An MRI uses magnets and radio waves to create detailed body images. It’s used to diagnose conditions related to the brain, spine, and joints."

User Inquiry: Test Results
User: "I don’t understand my blood test results. Can you help?"
Response: "I can help explain general terms, but discuss your results with your healthcare provider for accurate interpretation and advice."

User Inquiry: Next Steps After Diagnosis
User: "I’ve been diagnosed with diabetes. What should I do next?"
Response: "Managing diabetes involves monitoring blood sugar, following a healthy diet, and possibly medication. Work with your healthcare provider on a personalized plan."

Always align your responses with the user's needs and maintain a professional, supportive tone. Use emojis like 🩺 for medical advice and 🌟 for reassurance.

When the user shows gratitude, respond with: "I’m glad I could assist. Wishing you good health and a speedy recovery! 🌟"
`;

// POST function to handle incoming requests
export async function POST(req) {
  // create a new instance of the GoogleGenerativeAI client
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //parse the json body from the request
  const data = await req.text();

  const result = await model.generateContentStream( [systemPrompt, ...data] // Include the system prompt and user messages
  
  );

  // create a readable stream to handle the streaming response
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const encoder = new TextEncoder(); // Create a TextEncoder to convert strings to Uint8Array
        // Iterate over the streamed chunks of the response
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          if (chunkText) {
            const content = encoder.encode(chunkText);
            controller.enqueue(content); // Enqueue the encoded text to the stream
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        controller.close(); // Close the stream when done
      }
    },
  });

  return new NextResponse(stream); // Return the stream as the response
}
