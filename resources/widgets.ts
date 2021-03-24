import * as AWS from "aws-sdk";

const S3 = new AWS.S3();

const bucketName = process.env.BUCKET;

exports.main = async function (event, context) {
  try {
    const method = event.httpMethod;

    if (method === "GET") {
      if (event.path === "/") {
        const data = await S3.listObjectsV2({ Bucket: bucketName }).promise();
        const body = {
          widgets: data.Contents.map((e) => {
            return e.Key;
          }),
        };
        return {
          statusCode: 200,
          headers: {},
          body: JSON.stringify(body),
        };
      }
    }
  } catch (error) {
    console.log(error);
    const body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body),
    };
  }
};
