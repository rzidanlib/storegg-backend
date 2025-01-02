const User = require("./model");
const bcrypt = require("bcryptjs");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      if (req.session.user === null || req.session.user === undefined) {
        res.render("admin/user/view_signin", {
          alert,
        });
      } else {
        res.render("/dashboard");
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/.");
    }
  },

  actionSignin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        if (user.status === "Y") {
          const checkPassword = await bcrypt.compare(password, user.password);
          if (checkPassword) {
            req.session.user = {
              id: user._id,
              email: user.email,
              status: user.status,
              name: user.name,
            };
            res.redirect("dashboard");
          } else {
            req.flash("alertMessage", "Password yang anda masukan salah");
            req.flash("alertStatus", "danger");
            res.redirect("/.");
          }
        } else {
          req.flash("alertMessage", "Maaf status anda belum aktif");
          req.flash("alertStatus", "danger");
          res.redirect("/.");
        }
      } else {
        req.flash("alertMessage", "Email yang ada masukan tidak terdaftar");
        req.flash("alertStatus", "danger");
        res.redirect("/.");
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/.");
    }
  },
};
