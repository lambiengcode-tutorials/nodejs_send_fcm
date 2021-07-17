const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();

firestore.collection('notifications').where('date', '==', Date()).get().then(snapshot => {
  
})

const tokens = [
  // "eyIq9Fl9TLabgoi7Ky6Nf_:APA91bGuO5d4oG4g5P_zXda4_3tsd7Y8anYmDP5ICWmzSBNFRU1cD4xJbVLLJXKBXtyuv-oPl4BSz_i7uk1Me8m-kZJ31FeWEnaurG9ct0m6W1cuyx5ySiwYD1dr5kRwS8zJEB1TLaBi",
  "d3ICU6o8RM-Jp9BcoXl7x0:APA91bF45UBAX9AnpI1tzrUxgq5PDwnpFRW-kKX2AG8-CMFoqKeadxnkCi1u5Nn93HzgI--Y6H-u8tEwFsZFC4GkiHZkUUHdnRHvT2imjez5gPcNPdz8wTikyu23Zy-fcYavsRahkPKw",
  "fn2aSuvWTqqV_R53lIhFdN:APA91bGRHPKiA8rg1xVSdZMT-lgyOiDQOsW4O2ePyb8ECcIy5t913lmmEvB3wf6aiQ9u3XUmAlTRxjMpOIKtpFmiMCmmpgj9XZFYEhdlX1jXD0-1S0TB_EBW6Cp5rRtxG5PzViXtWBGN",
  "fmSTO8vnRGmd1MNMwWX_ds:APA91bFg3ElIMKUH36JYxMob1ujkwUGozuNaB08Ge9mOAeNaK5uUrqFZa4JR6yrajW0eRhpsNsAyKjxEKAy-pYORAzFayYBXgLAsOrmQg2XTI6kYZIaMorMX7xMlx-HlCdJksLCr4MzL",
  "chvVpb8mRXyuE-d17i8GA1:APA91bERfcu8B3pETLAyYlRzb3clxqP90l6TWzNHWUwoI3w9fQwxiMHIq8-onXEh54LOk1G_QdYYyDONwYZiLp9BLvucSARzRNkdQpKWZr1IB-ikA2vHcPZF3CIAlt5RzIBmMBZZqoTy",
];
function sendNotification() {
  const payload = {
    notification: {
      title: "Thầy vinh thèm KFC nha Tú, Nghĩa",
      body: "Hiếu đã tham gia lớp học",
      image: "",
      click_action: 'FLUTTER_NOTIFICATION_CLICK',
    },
    data: {
      title: "lambiengcode",
      tu: 'vinh ne',
      route: 'home',
    },
    // android: {
    //   notification: {
    //     channel_id: "cnid",
    //   },
    // },
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
    .sendToTopic('room - idRoomChat', payload)
    .then((response) => {
      console.log("Successfully sent message:", response);
    })
    .catch(function (error) {
      console.error("Error sending message:", error);
    });
}

sendNotification();
