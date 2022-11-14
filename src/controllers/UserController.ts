import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class UserController {
  async store(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
      },
    });

    return res.json(user);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const users = await prismaClient.user.findMany();

    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await prismaClient.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return res.json(user);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prismaClient.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
      },
    });

    return res.json(user);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await prismaClient.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json(user);
  }
}
