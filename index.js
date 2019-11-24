'use strict';


// var AudioAssets = require('./audio');

/**
 * Adds commas to a number
 * @param {pre} string single alpha
 * @param {que} number
 * @return {Audio voice speaker}
 */

module.exports = function(pre, que) {
	voiceQueueNative(pre, que)
  

	function voiceValidation(params) {
  // var voiceValidation = function voiceValidation(params) {
    
    var audioKosong = new Audio('./voice/nol.mp3');
    var audioSatu = new Audio('./voice/satu.mp3');
    var audioDua = new Audio('./voice/dua.mp3');
    var audioTiga = new Audio('./voice/tiga.mp3');
    var audioEmpat = new Audio('./voice/empat.mp3');
    var audioLima = new Audio('./voice/lima.mp3');
    var audioEnam = new Audio('./voice/enam.mp3');
    var audioTujuh = new Audio('./voice/tujuh.mp3');
    var audioDelapan = new Audio('./voice/delapan.mp3');
    var audioSembilan = new Audio('./voice/sembilan.mp3');
    
    if(params === 0) {
      setTimeout(() => { 
        audioKosong.play();
      }, 3000);
    }
    else if(params === 1) {
      setTimeout(() => { 
        audioSatu.play();
      }, 3000);
    }else if(params === 2) {
      setTimeout(() => { 
        audioDua.play();
      }, 3000);
    }
    else if(params === 3) {
      setTimeout(() => { 
        audioTiga.play()
      }, 3000);
    }
    else if(params === 4) {
      setTimeout(() => { 
        audioEmpat.play()
      }, 3000);
    }
    else if(params === 5) {
      setTimeout(() => { 
        audioLima.play()
      }, 3000);
    }
    else if(params === 6) {
      setTimeout(() => { 
        audioEnam.play()
      }, 3000);
    }
    else if(params === 7) {
      setTimeout(() => { 
        audioTujuh.play()
      }, 3000);
    }
    else if(params === 8) {
      setTimeout(() => { 
        audioDelapan.play()
      }, 3000);
    }
    else if(params === 9) {
      setTimeout(() => { 
        audioSembilan.play()
      }, 3000);  
    }
  }

  function voiceQueueNative(pre, que) {
  // var voiceQueueNative = function voiceQueueNative(pre, que) {
    var params = parseInt(que);
    var paramsTwo = pre;

    if(params === 0){
      console.log('params == 0')
      try{
        var mq = parseInt(localStorage.getItem('myQueue'));
        
        console.log('localStorage empty try', mq)
        setState({
          myQueue: mq,
        })
        // console.log('success try')
      } catch {
        console.log('localStorage empty catch')

        setState({
          myQueue: 0,
        })
      }

    } else {
      
      var audioAntrian = new Audio('./voice/nomor-antrian.mp3');
      var audioA = new Audio('./voice/A.mp3');
      var audioB = new Audio('./voice/B.mp3');
      var audioC = new Audio('./voice/C.mp3');
      var audioD = new Audio('./voice/D.mp3');
      var audioE = new Audio('./voice/E.mp3');
      var audioF = new Audio('./voice/F.mp3');
      var audioG = new Audio('./voice/G.mp3');
      var audioH = new Audio('./voice/H.mp3');
      var audioI = new Audio('./voice/I.mp3');
      var audioJ = new Audio('./voice/J.mp3');
      
      audioAntrian.play();
      if(paramsTwo === 'A') {
        setTimeout(() => { 
          audioA.play();
        }, 2000);
      }
      else if(paramsTwo === 'B') {
        setTimeout(() => { 
          audioB.play();   
        }, 2000);
      }
      else if(paramsTwo === 'C') {
        setTimeout(() => { 
          audioC.play();   
        }, 2000);
      }
      else if(paramsTwo === 'D') {
        setTimeout(() => { 
          audioD.play();   
        }, 2000);
      }
      else if(paramsTwo === 'E') {
        setTimeout(() => { 
          audioE.play();   
        }, 2000);
      }
      else if(paramsTwo === 'F') {
        setTimeout(() => { 
          audioF.play();   
        }, 2000);
      }

      if(params < 10) {
        voiceValidation(params);
      } 
      else {
        var see = params.toString();
        var arr = see.split("");

        var i;
        for (i = 0; i < arr.length; i++) {
          var par = parseInt(arr[i]);
          setTimeout(() => { 
            voiceValidation(par);
            console.log('zzzzzzzzzkkkkkkkkkkkkkkkk', par)
          }, [i]*1000);
        }
      }   
    }
  }

  return "success";

};