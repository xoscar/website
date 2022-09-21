const SlackGateway = () => ({
  async send(message: string) {
    const response = await fetch(process.env.SLACK_WEBHOOK || "", {
      method: "POST",
      body: JSON.stringify({
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Slack");
    }

    return response.text();
  },
});

export default SlackGateway();
