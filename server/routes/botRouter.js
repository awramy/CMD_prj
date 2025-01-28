import botController from "../controllers/botController.js";
import userController from "../controllers/userController.js";


const botRouter = (bot) => {
  bot.onText(/\/start/, (msg) => botController.sendMessage(msg, bot))
  app.post("/createUser", userController.createUser);
}
export default botRouter;
