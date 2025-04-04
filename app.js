import express, { json } from 'express';
import cors from 'cors';
import Retell from 'retell-sdk';

const app = express();
const port = 8080;

// Initialize Retell client
const retellClient = new Retell({
  apiKey: 'key_b882f9b4a38ba617024f13445770', // Consider moving to environment variables
});

// Middleware
app.use(cors());
app.use(json());

app.post('/create-web-call', async (req, res) => {
    const { agent_id } = req.body;

    try {
        const webCallResponse = await retellClient.call.createWebCall({
            agent_id
        });

        res.status(200).json(webCallResponse);
    } catch (error) {
        console.error('Error creating web call:', error);
        res.status(500).json({
            error: 'Failed to create web call',
            details: error.message
        });
    }
});

app.get('/v2/get-call/:call_id', async (req, res) => {
    const { call_id } = req.params;

    if (!call_id) {
        return res.status(400).json({ error: 'call_id is required' });
    }

    try {
        const callDetails = await retellClient.call.retrieve(call_id);
        res.status(200).json(callDetails);
    } catch (error) {
        console.error('Error fetching call details:', error);
        res.status(500).json({
            error: 'Failed to fetch call details',
            details: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});