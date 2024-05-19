"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
router.post('/users', users_controllers_1.createUser);
router.get('/users', users_controllers_1.getUsers);
router.put("/users/:id", users_controllers_1.updateUser);
router.delete("/users/:id", users_controllers_1.deleteUser);
router.get("/users/:id", users_controllers_1.getUser);
exports.default = router;