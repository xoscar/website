import { NextResponse, NextRequest } from "next/server";
import SlackGateway from "./gateways/Slack.gateway";

const middleware = (req: NextRequest) => {
  const { geo = {}, ip, cookies } = req;
  const country = geo.country || "";

  const knownVisitor = cookies.get("knownVisitor");
  const response = NextResponse.next();

  if (!knownVisitor) {
    SlackGateway.send(`
      We got a new visitor! 🌎🚨
      From: ${country}
      Ip: ${ip}
      Geo information: ${JSON.stringify(geo)}
    `);

    response.cookies.set("knownVisitor", "true");
  }

  return response;
};

export default middleware;
