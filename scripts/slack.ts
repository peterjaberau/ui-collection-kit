import { config } from "dotenv"
import fetch from "node-fetch"

config()

export async function main() {
  const url = process.env.SLACK_WEBHOOK_URL

  if (!url) {
    throw new Error("Missing Slack Webhook URL")
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project: "ui-collection-kit",
      version: "",
      url: "#",
      discord: "#",
      twitter: "#",
    }),
  })

  if (response.ok) {
    console.log("✅ Successfully sent message to Slack")
  } else {
    console.error("❌ Failed to send message to Slack")
  }
}

main()
