import { Basket } from "../models/schema.js";
import { User } from "../models/schema.js";

class BasketController {
  async createOne(req, res) {
    try {
      const { product_id, print_image } = req.body;
      const user_id = req.user?.user_id || "12345";

      const result = await Basket.create({
        user_id,
        product_id,
        print_image,
      });

      return res.status(200).json(result);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ error: e.message });
    }
  }

  async checkBasketItem(req, res) {
    try {
      const { product_id, print_image } = req.query;
      const user_id = req.user?.user_id || "12345";

      const result = await Basket.findOne({
        user_id,
        product_id,
        print_image,
      });

      if (result) {
        return res.status(200).json({ found: true, item: result });
      }
      return res.status(200).json({ found: false });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const user_id = req.user?.user_id || "12345";

      const result = await Basket.find({ user_id });
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  async deleteOne(req, res) {
    try {
      const user_id = req.user?.user_id || "12345";
      const { id: _id } = req.params;

      const result = await Basket.deleteOne({ _id });
      return res.status(200).json(result);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e.message });
    }
  }

  async deleteAll(req, res) {
    try {
      const { user_id } = req.user;

      const result = await Basket.deleteMany({ user_id: user_id });
      return res.status(200).json({ result });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  async сheckoutBascet(req, res) {
    try {
      const { sum } = req.body;
      const user_id = req.user?.user_id || "12345";
      const user = await User.findOne({ _id: user_id });
  
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден." });
      }
  
      if (sum > user.balance) {
        const neededAmount = sum - user.balance;
        const starsNeeded = Math.ceil(neededAmount / 1000);
  
        const titleText = "Покупка Telegram Stars";
        const descriptionText = `Оплата ${starsNeeded} Telegram Stars для пополнения баланса`;
        const payload = {
          userid: user_id,
          service: "balance_topup", 
        };
        const providerToken = process.env.YOUR_PROVIDER_TOKEN;
        const currency = "XTR";
        const prices = [{ label: `${starsNeeded} Telegram Stars`, amount: starsNeeded }]; 
        const invoice = {
          title: titleText,
          description: descriptionText,
          payload: JSON.stringify(payload),
          provider_token: providerToken,
          currency: currency,
          prices: prices,
          is_flexible: false,
        };
  
        const invoiceLink = await bot.createInvoiceLink(invoice);
  
        return res.status(200).json({
          message: "Недостаточно средств. Необходимо пополнить баланс.",
          invoiceLink,
        });
      }
  
      user.balance -= sum;
      await user.save();
      await Basket.deleteMany({ user_id });
  
      return res.status(200).json({
        message: "Оплата прошла успешно!",
        newBalance: user.balance,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: e.message });
    }
  }
}

export default new BasketController();