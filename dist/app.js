"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const http_1 = require("http");
const app = (0, express_1.default)();
app.use((0, express_1.json)());
const server = (0, http_1.createServer)(app);
// Retell AI Webhook Endpoint
app.post('/retell-webhook', (req, res) => {
    try {
        console.log("Incoming request body:", req.body);
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
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            response: "Sorry, I encountered an error processing your request.",
            actions: []
        });
    }
});
// Start the combined server
server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
//# sourceMappingURL=app.js.map