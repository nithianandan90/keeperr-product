import messaging from '@react-native-firebase/messaging';
import axios from 'axios';




export const sendNotificationToDevice = async (deviceId, notificationData) => {

    try {
        const serverKey = 'AAAAv_FQO7E:APA91bHuC0u-ageX_iDWQDJ0_MKyhIeXybbOQmkxsg4wlkmJW7lAkXfb_Z_uL4-qJFOKo9jt_t-ZUz1VK5TMNZY6_AGzZFY_pHyhJnFqYYqqXLUQE8NGh7_AHnORxL2IG3-GwDir1liP';
        const url = 'https://fcm.googleapis.com/fcm/send';
    
        const payload = {
          to: deviceId,
          notification: {
            title: notificationData.notification.title,
            body: notificationData.notification.body,
            icon: 'ic_launcher'
            // ...other notification fields
          },
          data: {
            chatRoomID: notificationData.data.chatRoomID,
            propertyTitle: notificationData.notification.title
          }
         

        };
    
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `key=${serverKey}`,
        };

        console.log('payload', payload);
    
        const response = await axios.post(url, payload, { headers });
        console.log('Notification sent successfully!', response.data);
      } catch (error) {
        console.log('Error sending notification:', error);
      }

    
//     if(deviceId){
//     try {
//       const message = {
//         notification: {
//           title: title,
//           body: body,
//         //   imageUrl: imageUrl,
//         },
//         token: deviceId,
//         android: {
//           notification: {
//             icon: 'ic_notification',
//             color: '#ff0000', // Customize the color of the notification icon
//           },
//         },
//       };
  
//       await messaging().sendToDevice(message);
//       console.log('Notification sent successfully!');
//     } catch (error) {
//       console.log('Error sending notification:', error);
//     }

// }
  };