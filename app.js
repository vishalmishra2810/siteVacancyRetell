import express, { json } from 'express';
import { createServer } from 'http';

const app = express();

app.use(json());

const server = createServer(app);

let latestCallId = null;

// Retell AI Webhook Endpoint
app.post('/retell-webhook', (req, res) => {
    try {
        console.log("Call Id is here:", req.body);

        latestCallId = req.body.call?.call_id

        const userMessage = req.body.transcript || "";
        const intent = req.body.intent || "";

        console.log(`User message: "${userMessage}", Intent: "${intent}"`);

        if (userMessage.toLowerCase().includes("job") ||
            userMessage.toLowerCase().includes("hire") ||
            intent === "job_search") {
            const response = {
                response: "I found 20 open positions for you! Here are the details...",
                jobs: [
                    { title: "Software Engineer", company: "Snapmint", location: "Remote" },
                    { title: "Marketing Manager", company: "GrowthGen", location: "New York" },
                ],
                actions: ["apply", "learn_more"]
            };
            return res.json(response);
        }

        return res.json({
            response: "I'm JobBot, your hiring assistant! Ask me about open roles or application status.",
            actions: []
        });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            response: "Sorry, I encountered an error processing your request.",
            actions: []
        });
    }
});

module.exports = {
    getLatestCallId: () => latestCallId,
};

server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});