#!/usr/bin/env node

const Card = require("npmcard");

let card = new Card();

const user = {
  name: "Michael Lefkowitz",
  github: "lfkwtz",
  web: "https://www.lefkowitz.me",
  avatar: "______",
  avatar2: "| |__| |",
  avatar3: "|  ()  |",
  avatar4: "|______|",
};

const title = card.chalk.red;
const link = card.chalk.green;
const label = card.chalk.white.bold;
const text = card.chalk.white;

card
  .setHeader(title(user.name))
  .addRow([label("  GitHub:"), link(`https://github.com/${user.github}`)])
  .addRow([label("     Web:"), link(`${user.web}`)])
  .addRowEmpty()
  .addRow([label("        "), text(` ${user.avatar}`)])
  .addRow([label("        "), text(`${user.avatar2}`)])
  .addRow([label("        "), text(`${user.avatar3}`)])
  .addRow([label("        "), text(`${user.avatar4}`)])
  .addRowEmpty()
  .addRow([label("   Card:"), text(`npx lefkowitz`)])
  .show();
