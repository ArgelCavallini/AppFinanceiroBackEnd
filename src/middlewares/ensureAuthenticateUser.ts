import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  username: string;
  id_user: string;
  id_company: string;
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
    const { username, id_user, id_company} = verify(token, process.env.TOKEN) as IPayload;

    request.username = username;
    request.id_user = id_user;
    request.id_company = id_company;

    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
}