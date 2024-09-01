import { OAuth2Client } from "google-auth-library";
import { CLIENT_ID } from "./envs";

const client = new OAuth2Client(CLIENT_ID);

export const verifyGoogleToken = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return payload;
};
