/*const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: process.env.us-east-2,
});
const bucket = process.env.snippetsbucket;

const getSignedUrl = (key) => {
  const signedUrl = s3.getSignedUrl("putObject", {
    Bucket: bucket,
    Key: key,
  });

  return signedUrl;
};

module.exports = { getSignedUrl };*/