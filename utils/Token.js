// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"


export default async function Token(data,time) {
  return jwt.sign( data , process.env.NEXT_PUBLIC_SECRET, { expiresIn: time });
}