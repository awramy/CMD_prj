import * as crypto from "node:crypto";

const botToken = process.env.TELEGRAM_BOT_TOKEN;

export default function (req, res, next) {
  try {
    const {hash, id, first_name, username, auth_date } = req.headers;
    const data = { id, first_name, username, auth_date }

    const sortedData = Object.keys(data)
      .sort()
      .map((key) => `${key}=${data[key]}`)
      .join('\n');

    const secretKey = crypto.createHash('sha256').update(botToken).digest()
    const hmac = crypto.createHmac('sha256', secretKey).update(sortedData).digest('hex')
    return console.log(hmac === hash)
  } catch (error) {
    return res.status(401).json({message: error.message})
  }
}