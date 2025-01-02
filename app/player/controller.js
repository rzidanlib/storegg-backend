const Player = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const player = await Player.find();
      res.render("admin/player/view_player", {
        player,
        alert,
        name: req.session.user.name,
        title: "Halaman Player",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/player");
    }
  },
};
