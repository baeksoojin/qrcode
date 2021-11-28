import React, { useState ,useRef} from 'react';
import QrReader from 'react-qr-reader';


function APP2(){


    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const qrRef = useRef(null);

    // const onScanFile = (event) => {
    //     event.preventDefault();
    //     qrRef.current.openImageDialog();
    // }
    // <form className={onScanFile}>
    //             <button type="submit" >scanner</button>
    //         </form>

    const handleErrorWebCam = (error) => {
      console.log(error);
    }

    const handleScanWebCam = (result) => {
      if (result){
          setScanResultWebCam(result);
      }
    }

    
    return(
        <div className="scanner">

            <video id="video" width="640" height="480" autoplay></video>

            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
            
        </div>

    );
    

}
export default APP2;
