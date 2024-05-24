const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");


const objectContructor = async (dir, fs) => {

  const posts = await common.getDirectusData("kluz_blogposts");

  await posts.data.forEach((item) => {
    let i = { ...item };
    i.slug = item.heading ? common.slugify(item.heading) : common.slugify(item.tagline);
    i.date = item.date ? item.date.split("T")[0] : '';
    i.cover_image = item.cover_image ? common.getImage(item.cover_image.id) : i.image ? common.getImage(item.image.id) : '';
    i.image = item.image ? common.getImage(item.image.id) : '';

    fs.writeFile(
      dir + "/" + i.slug + ".json",
      JSON.stringify(i),
      function (err, result) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING UPDATES: ", i.slug + ".json");
  });
}

const getBlogposts = async () => {
  
  const dir = "./content/updates";
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
  getBlogposts
}