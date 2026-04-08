const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("atom.xml");
https.get("https://blog.comema.ggff.net/atom.xml", function(response) {
  response.pipe(file);
  file.on("finish", () => {
      file.close();
      console.log("Download Completed");
  });
}).on('error', (e) => {
    console.error(e);
});
