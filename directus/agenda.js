const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  let agenda = await common.getDirectusData("kluz_agenda");
  
  agenda.data.forEach((item, num) => {
    let i = { ...item };
    i.slug = common.slugify(item.start_date);
    
    i.start_date = item.start_date ? common.formatDate(item.start_date) : '';
    i.start_time = item.start_date ? common.formatTime(item.start_date) : '';
    
    i.end_date = item.end_date ? common.formatDate(item.end_date) : '';
    i.end_time = item.end_date ? common.formatTime(item.end_date) : '';

    i.time = `${ i.start_time.split(" ")[0] } - ${ i.end_time }`
    
    i.activity = item.activity ? item.activity : '';

    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING AGENDA: ", i.slug + ".json");
  });
}

const getAgenda = async () => {
  
  const dir = "./content/agenda";
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
  getAgenda
}