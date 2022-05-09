import { TwitterApi } from "twitter-api-v2";

import { config } from "dotenv";
config();

const main = async () => {
  let twitterApi = new TwitterApi({
    appKey: process.env.APP_KEY!,
    appSecret: process.env.APP_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCEESS_SECRET!,
  });

  const rand = Math.floor(Math.random() * 17) + 1;
  const filename =
    (rand.toString().length === 1 ? "0" + rand.toString() : rand.toString()) +
    ".png";

  await twitterApi.v1.updateAccountProfileImage(`${__dirname}/img/${filename}`);
};

main();
