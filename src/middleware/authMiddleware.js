const User = require("../models/User");

const checkRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const userId = req.headers.userid;

      if (!userId) {
        return res.status(401).json({ message: "User ID required" });
      }

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: "Access denied" });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = { checkRole };