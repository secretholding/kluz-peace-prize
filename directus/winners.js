const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");


const objectContructor = async (dir, fs) => {

  const winners = await common.getDirectusData("kluz_winners");

  await winners.data.forEach((item) => {
    let i = { ...item };
    i.slug = item.heading ? common.slugify(item.heading) : common.slugify(item.applicant);

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

const getWinners = async () => {
  
  const dir = "./content/prize";
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
  getWinners
}
