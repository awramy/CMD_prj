class botController {
  async sendMessage(msg, bot) {
    try {
      const profilePhotos = await bot.getUserProfilePhotos(userId);

      if (profilePhotos.total_count > 0 && profilePhotos.photos?.[0]?.[0]) {
        const fileID = profilePhotos.photos[0][0].file_id;
        const fileInfo = await bot.getFile(fileID);
        const downloadedFile = await bot.downloadFile(fileInfo.file_id, './images');
        
        console.log("Фотография скачана:", downloadedFile);
      }

      const photo_url = msg.from.photo_url;
      if (!photo_url) {
        const generatedPhotoURL = `https://api.dicebear.com/6.x/lorelei/svg?seed=${Math.random()
          .toString(36)
          .substring(2, 15)}`;
      }

      await bot.sendMessage(
        chatId,
        "Заходи в наш интернет магазин по кнопке ниже"
      );
    } catch (e) {
      console.error("Ошибка в sendMessage:", e);
    }
  }
}

export default new botController()