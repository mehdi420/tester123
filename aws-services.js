import AWS from 'aws-sdk';

// Conditionally load dotenv only in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

AWS.config.update({
  accessKeyId: process.env.APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.APP_ACCESS_KEY,
  region: process.env.APP_REGION,
});

const textract = new AWS.Textract();
export default textract;
