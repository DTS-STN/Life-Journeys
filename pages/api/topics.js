import { topics } from "../api/data";

export default function handler(req, res) {
  res.status(200).json(topics);
}
