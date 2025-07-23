import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  const { id } = req.query;

  const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
