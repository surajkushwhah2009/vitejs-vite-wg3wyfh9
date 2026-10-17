
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomID } = useParams();

  const myMeet = async (element) => {
    if(!element) return;
    const appId = 1696848116;
    const serverSecret = "016ae3cd5602246137f4bc4642730d71";

    
    // 5 आर्गुमेंट्स पूरे पास करें (appId, serverSecret, roomID, userID, userName)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomID,
      "user_" + Math.floor(Math.random() * 10000), // Random User ID
      "User_" + Math.floor(Math.random() * 100)    // Random User 
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    // .join की जगह .joinRoom का उपयोग करें
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, 
      },
    });
  };

  // यह return स्टेटमेंट आपकी ब्लैंक स्क्रीन की समस्या को ठीक करेगा
  return (
    <div 
      ref={myMeet} 
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}

export default Room;






/*import { ZegoUIKitPrebuilt, ZegoUIKITPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom';


function Room(){
  let {roomID} = useParams()
  const myMeet = async (element) =>{
    const appId = 1696848116;
    const serversecret = "016ae3cd5602246137f4bc4642730d71";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serversecret,roomID,Date.now().toString(),"Suraj kushwaha")

    const zp = ZegoUIKITPrebuilt.create(kitToken)

    zp.joinRoom({
      container: element,
      sharedLink: [
        {
          name: 'personal Link',
          url: `http://localhost:5173/${roomID}`

      },
    ],

    scenario : {
      mode : ZegoUIKITPrebuilt.GroupCall(),
    }
    })

  }
  return(
    <>
     <div ref={myMeet}></div>
    </>
  )
}

export default Room*/