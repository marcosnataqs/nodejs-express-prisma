import { Request, Response, Router } from "express";

import { UserController } from "./controllers/UserController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("⚡️[server]: Up and running!");
});

routes.post("/users", new UserController().store);
routes.get("/users", new UserController().index);
routes.get("/users/:id", new UserController().show);
routes.put("/users/:id", new UserController().update);
routes.delete("/users/:id", new UserController().delete);

export { routes };
