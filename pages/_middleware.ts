import { NextResponse, NextMiddleware } from "next/server";
import slackGateway from "../gateways/Slack.gateway";

const middleware: NextMiddleware = (req) => {
  const { nextUrl: url, geo = {}, ip } = req;
  const country = geo.country || "";

  slackGateway.send(`
    We got a new visitor!
    From: ${country}
    Ip: ${ip}
    Geo information: ${JSON.stringify(geo)}
  `);

  return NextResponse.rewrite(url);
};

export default middleware;
