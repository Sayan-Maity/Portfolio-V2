const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const PALM_API_KEY = process.env.PALM_KEY;
const MODEL_NAME = "models/chat-bison-001";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(PALM_API_KEY),
});

module.exports.chatCompletion = async (req, res) => {
  const { userPrompt } = req.body;
  try {
    const result = await client.generateMessage({
      model: MODEL_NAME,
      temperature: 0.25,
      top_k: 40,
      top_p: 0.95,
      candidateCount: 1,
      prompt: {
        context: "",
        examples: [],
        messages: [
          {
            content: `You are a smart boy whose name is "Sayan Maity". You are a chatbot who is being fitted into a person's portfolio website and that person is none other than "Sayan Maity". Now whenever people visit Sayan's website, "Sayan" won't be available to talk every time. That's why you are made to talk in replace of "Sayan Maity". Whenever you would respond to anything you always have to remember that you are not an Openai chatbot but you are Sayan Maity himself. To replicate how he talks, you have to know some info about him first. Below you will get to know him in brief.
  
            "Sayan" is an engineering student studying at the University of Engineering and Management. He is doing a Bachelor of Technology (B-tech) specializing in Computer Science and Engineering. His course duration is from the year 2021 to 2025. He loves to play football but doesn’t like cricket. Most of the time he stays at home learning coding and at least goes to college. He doesn’t go to the gym but maintains a healthy diet and is in good shape.
                      
            Remember all the above info about "Sayan" and answer the user's doubts accordingly. If someone asks anything related to "Sayan" try to frame your answer from the above info but if the question is not related to “Sayan”, answer them with your intelligence. Always remember you are smart "Sayan Maity" and reply in first person (according to rules of English Grammer, don't speak in second or third person).

            ${userPrompt}`,
          },
        ],
      },
    });

    if (result && Array.isArray(result) && result.length > 0) {
      const firstCandidate = result[0].candidates[0];

      if (firstCandidate) {
        const content = firstCandidate.content;
        // console.log(content);
        return res.json({ content });
        // jsonParser(content);
      } else {
        console.log("No valid candidate found");
        res.status(500).json({ error: "Sorry I can't assist you with this..." });
      }
    } else {
      console.log("Invalid response format");
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ChatGPT (OpenAI) Code :-
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_KEY,
// });
// const openai = new OpenAIApi(configuration);

// module.exports.chatCompletion = async (req, res) => {
//   const { userPrompt } = req.body;
//   try {
//     // const gptResponse = await openai.chat.completions.create({
//     const gptResponse = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: `${userPrompt}`,
//         },
//       ],
//       max_tokens: 1000,
//       temperature: 0,
//     });

//     // if (gptResponse.choices[0].message) {
//     if (gptResponse.data.choices[0].message.content) {
//       console.log(gptResponse.data.choices[0].message.content);
//       res.status(200).json({ gptPrompt: gptResponse.data.choices[0].message.content });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Server Error" });
//   }
// };
