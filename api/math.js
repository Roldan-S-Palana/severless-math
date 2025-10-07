export default function handler(req, res) {
  const { op, a, b } = req.query;
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  let result;

  switch (op) {
    case 'add':
      result = numA + numB;
      break;
    case 'subtract':
      result = numA - numB;
      break;
    case 'multiply':
      result = numA * numB;
      break;
    case 'divide':
      if (numB === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
      result = numA / numB;
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation. Use add, subtract, multiply, or divide.' });
  }

  res.status(200).json({ operation: op, result });
}
