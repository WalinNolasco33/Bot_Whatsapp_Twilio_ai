import { Response, Request } from "express";

import { sendMessage } from "./SendMessage";
import { createTextIa } from "./ia";

async function iaResponse(body: string): Promise<void> {
  const text = await createTextIa(body);

  sendMessage(text.generated_text);
}

export const messageRead = (_req: Request, _res: Response<string>) => {
  iaResponse(_req.body.Body);
};
