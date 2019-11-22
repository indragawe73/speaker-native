'use strict';

import {AudioAssets} from './audio'

/**
 * Adds commas to a number
 * @param {pre} string single alpha
 * @param {que} number
 * @return {Audio voice speaker}
 */

module.exports = function numFormatter(pre, que) {
	voiceQueueNative(pre, que)

	const audioAntrian = new Audio(AudioAssets.antrian)
	const audioKosong = new Audio(AudioAssets.kosong)
	const audioSatu = new Audio(AudioAssets.satu)
	const audioDua = new Audio(AudioAssets.dua)
	const audioTiga = new Audio(AudioAssets.tiga)
	const audioEmpat = new Audio(AudioAssets.empat)
	const audioLima = new Audio(AudioAssets.lima)
	const audioEnam = new Audio(AudioAssets.enam)
	const audioTujuh = new Audio(AudioAssets.tujuh)
	const audioDelapan = new Audio(AudioAssets.delapan)
	const audioSembilan = new Audio(AudioAssets.sembilan)

	const audioA = new Audio(AudioAssets.A)
	const audioB = new Audio(AudioAssets.B)
	const audioC = new Audio(AudioAssets.C)
	const audioD = new Audio(AudioAssets.D)
	const audioE = new Audio(AudioAssets.E)
	const audioF = new Audio(AudioAssets.F)
	const audioG = new Audio(AudioAssets.G)
	const audioH = new Audio(AudioAssets.H)
	const audioI = new Audio(AudioAssets.I)
	const audioJ = new Audio(AudioAssets.J)

	function voiceValidation(params) {
    console.log('mmmmmmmmmmmmmmmmm 1', params)
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
    let params = parseInt(que);
    let paramsTwo = pre;

    if(params === 0){
      console.log('params == 0')
      try{
        let mq = parseInt(localStorage.getItem('myQueue'));
        
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
        let see = params.toString();
        let arr = see.split("");

        let i;
        for (i = 0; i < arr.length; i++) {
          let par = parseInt(arr[i]);
          setTimeout(() => { 
            voiceValidation(par);
            console.log('zzzzzzzzzkkkkkkkkkkkkkkkk', par)
          }, [i]*1000);
        }
      }   
    }
  }

  // return number.toLocaleString(locale);

};