import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return response.status(401).json({
      message: "Token error",
    });
  }

  try {
    const { sub } = verify(token, process.env.TOKEN) as IPayload;

    request.id_user = sub;

    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
}