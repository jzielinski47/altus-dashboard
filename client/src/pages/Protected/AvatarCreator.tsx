import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

const seeds: string[] = [
  "Sophia",
  "Desitny",
  "Sadie",
  "Ryker",
  "Jessica",
  "Mason",
  "Sarah",
  "Kimberly",
  "Adrian",
  "Wyatt",
  "Oliver",
  "Nolan",
  "Jameson",
  "Riley",
  "George",
  "Sara",
  "Jude",
  "Aidan",
  "Leo",
];

const avatar = createAvatar(lorelei, {
  seed: "Destiny",
  flip: true,
  backgroundColor: ["c0aede"],
});

export const svg = avatar.toString();
