const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const tokens = [
  "cvUk11YpSRaWl1S_74LOP3:APA91bEl9aJKUcYjw42_EfoYLvN1B7JKUqFJfLQGO7SX6iw72x__2NrQtduENMbTsmCrN8BuXaUQLsMT90Mr_dsyTCzG7Osgk6GKcNfaU89gjIv7XGJLqIStTX8AzZ_fRVzgPikqYcm6",
  "cmahdBUVQmC8vIsJhGe9ee:APA91bG2fx6lJdEvcjBUDKmTVbIpX1QWEC2Qge1E87pENDEeQprnrTZcVCXeOxFo_-E6GUjbX7YVlPoMg-22wJngKkVnFp5cFYCOadIcoja9H-G_nuS91b-86qu24UtM1d4-CiadgXkV",
];
function sendNotification() {
  const payload = {
    notification: {
      title: "Title",
      body: "Body",
      image: "https://avatars.githubusercontent.com/u/60530946?v=4",
    },
    data: {
      id: "lambiengco12313de",
      invitation: "hehe",
      startTime: "2021-07-30T02:40:38.448Z",
      avatar: "https://avatars.githubusercontent.com/u/60530946?v=4",
      route: "conversation",
      fullname: "Dao Hong Vinh",
      username: "lambiengcode",
    },
    android: {
      notification: {
        channel_id: "cnid",
      },
    },
    token: tokens[0],
    // apns: {
    //   payload: {
    //     aps: {
    //       "mutable-content": 1,
    //     },
    //   },
    //   fcm_options: {
    //     image: "https://foo.bar.pizza-monster.png",
    //   },
    // },
    // webpush: {
    //   headers: {
    //     image: "https://foo.bar.pizza-monster.png",
    //   },
    // },
    // token: tokens[2],
  };
  admin
    .messaging()
    .send(payload)
    .then((response) => {
      console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
      console.error("Error sending message:", error);
    });
}

sendNotification();
