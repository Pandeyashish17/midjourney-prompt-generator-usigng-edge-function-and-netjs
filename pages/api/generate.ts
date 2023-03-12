import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";

export const config = {
  runtime: "edge",
};

interface GenerateRequest {
  keywords: string;
  apiKey: string;
}

const handler = async (req: Request): Promise<Response> => {
  const { keywords, apiKey } = (await req.json()) as GenerateRequest;
  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `this is an example prompt i got from the keyword "ocean": "Create the image of a beautiful ocean, with waves crashing against the shore. The water is a deep blue, with hints of green in the shallower areas. In the foreground, there is a sandy beach with seashells and driftwood scattered along the shoreline. In the distance, there is a rocky island with steep cliffs rising up from the water." here is another example of mountain: "Create the image of a majestic mountain range, with snow-capped peaks rising up into the clouds. In the foreground, there is a dense forest with towering trees, their leaves creating a canopy overhead that filters the sunlight into dappled patterns on the ground below. The sky is a deep blue, with hints of pink and orange in the clouds that are catching the light of the setting sun." now i will give you some keywords and generate the descritption based on those keywords. add the details u want which will be cool to have and generate only description.  Your description should be vivid and explanatory, providing clear details of the image's composition, color scheme, and overall aesthetic. Additionally, feel free to add any additional details or features that you believe would enhance the image. now i will give you some keywords and start the description with create the image of`,
      },
      { role: "user", content: keywords },
    ],
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload, apiKey);
  return new Response(stream);
};

export default handler;
