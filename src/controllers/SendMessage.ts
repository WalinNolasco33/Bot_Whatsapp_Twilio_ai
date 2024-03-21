import { client, myNumber, twilioNumber } from "../app";
import { SendMessage } from "../types/send";

export const sendMessage = (body: string) => {
  const myConfig: SendMessage = {
    from: twilioNumber,
    to: myNumber,
    body,
  };

  client.messages.create(myConfig).then((message) => console.log(message.sid));
};
