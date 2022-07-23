module.exports =  (req, res, next) => {
  if (req.path === '/users') return next();

  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ message: 'No token provided' });

  return next();
}
