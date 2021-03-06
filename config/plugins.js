module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_SECRET'),
      region: 'us-west-1',
      params: {
        Bucket: 'coldcases',
      },
    },
  },
});
