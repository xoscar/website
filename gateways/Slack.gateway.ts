const { SLACK_WEBHOOK = "" } = process.env;

const SlackGateway = () => ({
  async send(message: string) {
    const response = await fetch(SLACK_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Slack");
    }

    return response.json();
  },
});

export default SlackGateway();
