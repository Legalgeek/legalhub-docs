let Client = require("ssh2-sftp-client");
let path = require("path");

let client = new Client();
const config = require("../.auth/ftp.json");
const localPath = path.resolve(__dirname, "../docs/.vuepress/dist");
const remotePath = "/home/ubuntu/legalhub-docs";
const main = async () => {
  try {
    await client.connect(config);
    if (await client.exists(remotePath)) {
      await client.rmdir(remotePath, true);
      console.log("远程存在目录，删除成功");
    }
    let rslt = await client.uploadDir(localPath, remotePath);
    console.log("上传成功");
    return rslt;
  } finally {
    client.end();
  }
};

main();
