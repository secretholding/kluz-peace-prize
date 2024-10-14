const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");


const objectContructor = async (dir, fs) => {

  const junctionFields = [
    "winners.kluz_winners_id.*"
  ]

  const highlights = await common.getDirectusData("kluz_highlights", junctionFields);

  await highlights.data.forEach((item) => {
    let i = { ...item };
    i.slug = item.title ? common.slugify(item.title) : common.slugify(item.event_year);

    i.winners = item.winners.map(winner => {
      return {
        ...winner.kluz_winners_id,
        slug: winner.kluz_winners_id.slug ? winner.kluz_winners_id.slug : common.slugify(winner.kluz_winners_id.title)
      }
    });


    fs.writeFile(
      dir + "/" + i.slug + ".json",
      JSON.stringify(i),
      function (err, result) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING WINNERS: ", i.slug + ".json");
  });
}

const getHighlights = async () => {
  
  const dir = "./content/highlights";
  if (fs.existsSync(dir)) {
    rimraf(dir, async () => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
        if (err) {
          console.log(err);
        } else {
          objectContructor(dir, fs);
        }
      });
    });
  } else {
    if (!fs.existsSync("./content")) {
      fs.mkdirSync("./content");
    }
    fs.mkdirSync(dir);
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        objectContructor(dir, fs);
      }
    });
  }
}

module.exports = {
  getHighlights
}
