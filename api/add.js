export default function handler(req, res) {
  const { a, b } = req.query;
  const sum = Number(a) + Number(b);
  res.status(200).json({ sum });
}
