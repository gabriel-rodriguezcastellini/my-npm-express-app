import { Router } from "express";
const router = Router();
const users = [];

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    users.push(name);
    res.redirect("/users");
  } else {
    res.status(400).send("Name is required");
  }
});

router.get("/", (_req, res) => {
  res.render("users", { users });
});

export default router;
