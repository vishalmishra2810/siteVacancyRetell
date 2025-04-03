// import Retell from 'retell-sdk';
// import dotenv from 'dotenv';

// dotenv.config();

// interface AgentParams {
//   response_engine: {
//     llm_id: string;
//     type: "retell-llm";
//   };
//   voice_id: string;
// }

// interface AgentResponse {
//   agent_id: string;
//   [key: string]: any;
// }

// interface WebCallResponse {
//   agent_id: string;
//   [key: string]: any;
// }

// const client = new Retell({
//   apiKey: "b882f9b4a38ba617024f13445770", 
// });

// export async function initializeRetell(): Promise<AgentResponse> {
//   try {
//     console.log("Initializing Retell agent...");
    
//     const params: AgentParams = {
//       response_engine: { 
//         llm_id: process.env.LLM_ID || '',
//         type: "retell-llm", 
//       },
//       voice_id: process.env.VOICE_ID || '11labs-Adrian',
//     };

//     const agentResponse: AgentResponse = await client.agent.create(params);
//     console.log("Agent Created:", agentResponse);
//     return agentResponse;

//   } catch (error) {
//     console.error("Error creating agent:", error);
//     throw error;
//   }
// }

// export async function makeWebCall(agentId: string): Promise<WebCallResponse> {
//   try {
//     console.log(`Making web call for agent ID: ${agentId}`);
    
//     const webCallResponse: WebCallResponse = await client.call.createWebCall({ 
//       agent_id: agentId 
//     });

//     console.log("Web Call Response:", webCallResponse);
//     return webCallResponse;

//   } catch (error) {
//     console.error("Error in Web Call:", error);
//     throw error;
//   }
// }

// // Optional: If you want to run this file directly for testing
// if (require.main === module) {
//   (async () => {
//     try {
//       const agent = await initializeRetell();
//       await makeWebCall(agent.agent_id);
//     } catch (error) {
//       console.error("Retell initialization failed:", error);
//       process.exit(1);
//     }
//   })();
// }