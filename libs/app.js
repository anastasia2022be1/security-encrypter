import express from "express";
import { encrypt, decrypt } from "./crypto.js";

const app = express()
app.use(express.json())

app.post("/encrypt", (req, res) => {
    // Take in message from request
    const { message } = req.body;
    // Respond with encrypted message
    if (!message) {
        return res.status(400).json({ error: 'Message required' });
    }

    const encryptedMessage = encrypt(message);
    res.json({ encryptedMessage });
})

app.post("/decrypt", (req, res) => {
    // Take in message from request
    const { message } = req.body;
    // Respond with decrypted message
    if (!message) {
        return res.status(400).json({ error: 'Message required' });
    }

    const decryptedMessage = decrypt(message);
    res.json({ decryptedMessage });
})

export default app;