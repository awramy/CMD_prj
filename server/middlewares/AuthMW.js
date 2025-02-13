const express = require('express');
const crypto = require('crypto');

export default function (req, res, next) {
  const queryParams = req.query;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  const checkAuth = (queryParams, botToken) => {
    const { hash, ...data } = queryParams;
    const sortedData = Object.keys(data)
      .sort()
      .map((key) => `${key}=${data[key]}`)
      .join('\n');
    const secretKey = crypto.createHash('sha256').update(botToken).digest()
    const hmac = crypto.createHmac('sha256', secretKey).update(sortedData).digest('hex')
    return hmac === hash
  }
}