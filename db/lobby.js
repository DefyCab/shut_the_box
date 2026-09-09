import * as api from "./db.js";
import { createGameService } from "./repo.js";

const gameService = createGameService(api);

const room = await gameService.getRoom("LRJJPP");
const state = await gameService.getCurrentState("5BN8EB");

const main = document.querySelector(".main-container");
const gameRoom = document.createElement("div");

console.log(room);
console.log(state);
