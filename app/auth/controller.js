const Player = require("../player/model");
const path = require("path");
const fs = require("fs");
const { rootPath } = require("../../config");

module.exports = {
  signUp: async (req, res) => {
    try {
      const payload = req.body;

      if (req.file) {
        let tmp_path = req.file.path;
        let originalExt =
          req.file.originalname.split(".")[
            req.file.originalname.split(".").length - 1
          ];
        let filename = req.file.filename + "." + originalExt;
        let target_path = path.resolve(rootPath, `public/uploads/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            const player = new Player({
              ...payload,
              avatar: filename,
            });
            await player.save();

            delete player._doc.password;

            res.status(201).json({ data: player });
          } catch (error) {
            if (error && error.name === "ValidationError") {
              return res.status(422).json({
                error: 1,
                message: error.message,
                fields: error.errors,
              });
            }
          }
        });
      } else {
        let player = new Player(payload);

        await player.save();

        delete player._doc.password;

        res.status(201).json({ data: player });
      }
    } catch (error) {
      if (error && error.name === "ValidationError") {
        return res.status(422).json({
          error: 1,
          message: error.message,
          fields: error.errors,
        });
      }
    }
  },
};
