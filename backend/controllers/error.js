exports.get404 = (req, res, next) => {
  res.status(404).json({isAuthenticated: req.session.isLoggedIn, msg: 'req not fullfiled'});
};

exports.get500 = (req, res, next) => {
  res.status(500).json({isAuthenticated: req.session.isLoggedIn, msg: 'Page Not Found'});
};
