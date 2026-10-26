import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey) });
});

// AI Health Assistant endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, language = 'en' } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!ai) {
      // Graceful fallback response when API key is not yet configured
      const fallbackText = language === 'bn'
        ? "এই পরামর্শটি শুধুমাত্র সাধারণ তথ্যের জন্য, কোনো চিকিৎসা বা রোগ নির্ণয় নয়। প্রেসক্রিপশন বা চিকিৎসার জন্য অনুগ্রহ করে পল্লী চিকিৎসক মোঃ আনোয়ারুল ইসলাম (রিফাত ফার্মেসী, ছয়ঘরিয়া বাজার, সাতক্ষীরা, ফোন: ০১৭১৮-১২৮১০৬) অথবা নিকটস্থ সরকারি হাসপাতালে যোগাযোগ করুন। জরুরি অবস্থায় ৯৯৯ নম্বরে কল করুন।"
        : "This is general health information, not a diagnosis. See a doctor for medical advice. Please consult Md. Anoarul Islam at Rifat Pharmacy, Chhoygharia Bazar, Satkhira (Phone: 01748-128106) or visit Satkhira Sadar Hospital. In an emergency, call 999 or go to the nearest hospital immediately.";
      return res.json({ text: fallbackText });
    }

    const systemInstruction = `You are the AI Health Information Assistant for Md. Anoarul Islam's Rural Medical Practice & Rifat Pharmacy in Chhoygharia, Satkhira Sadar, Bangladesh.

STRICT MEDICAL DIRECTIVES:
1. Provide only clear, safe, evidence-based general health education, preventative hygiene tips, and lifestyle guidance.
2. Respond in the language used by the user (${language === 'bn' ? 'Bengali/বাংলা' : 'English or Bengali as preferred by user'}).
3. NEVER make definitive medical diagnoses.
4. NEVER prescribe specific prescription drugs, dosages, or pharmaceutical regimens.
5. In every single response, provide general home self-care (such as drinking clean boiled water, ORS for dehydration, rest, sponge bath for fever) and explicitly recommend visiting Md. Anoarul Islam at Rifat Pharmacy (Chhoygharia Bazar, Satkhira Sadar, Phone: 01748-128106) or a certified hospital doctor.
6. For red-flag emergencies (chest pain, acute breathlessness, high unyielding fever with rash/stiff neck, severe trauma, snakebite, unconsciousness, acute abdomen, profuse bleeding), urge immediate emergency transfer to Satkhira Sadar Hospital and calling 999.
7. You MUST always include this statement at the bottom of your reply:
"This is general information, not a diagnosis. See a doctor for medical advice. In an emergency, call 999 or go to the nearest hospital." (or its natural Bengali translation: "এটি সাধারণ স্বাস্থ্য তথ্য, কোনো চিকিৎসা বা রোগ নির্ণয় নয়। সঠিক পরামর্শের জন্য চিকিৎসকের শরণাপন্ন হন। জরুরি অবস্থায় অবিলম্বে ৯৯৯ নম্বরে কল করুন বা নিকটস্থ হাসপাতালে যান।")`;

    // Extract user prompt and conversation history
    const lastMessage = messages[messages.length - 1];
    const prompt = lastMessage.content || lastMessage.text || '';

    // Protect against external latency with 12s timeout
    const timeoutPromise = new Promise<{ text?: string }>((_, reject) =>
      setTimeout(() => reject(new Error('AI request timeout')), 12000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const replyText = response.text || '';
    res.json({ text: replyText });
  } catch (error: any) {
    console.error('Error generating AI health advice:', error.message || error);
    const safeFallback = (req.body?.language === 'bn')
      ? "এই পরামর্শটি শুধুমাত্র সাধারণ তথ্যের জন্য, কোনো চিকিৎসা বা রোগ নির্ণয় নয়। প্রেসক্রিপশন বা চিকিৎসার জন্য অনুগ্রহ করে পল্লী চিকিৎসক মোঃ আনোয়ারুল ইসলাম (রিফাত ফার্মেসী, ছয়ঘরিয়া বাজার, সাতক্ষীরা, ফোন: ০১৭১৮-১২৮১০৬) অথবা নিকটস্থ সরকারি হাসপাতালে যোগাযোগ করুন। জরুরি অবস্থায় ৯৯৯ নম্বরে কল করুন।"
      : "This is general health information, not a diagnosis. See a doctor for medical advice. Please consult Md. Anoarul Islam at Rifat Pharmacy, Chhoygharia Bazar, Satkhira (Phone: 01748-128106) or visit Satkhira Sadar Hospital. In an emergency, call 999 or go to the nearest hospital immediately.";
    res.json({ text: safeFallback });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // In dev, use Vite's dev server middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In prod, serve static dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
