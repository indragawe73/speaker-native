'use strict';

import {AudioAssets} from './audio'

/**
 * Adds commas to a number
 * @param {pre} string single alpha
 * @param {que} number
 * @return {Audio voice speaker}
 */

module.exports = function(pre, que) {
	voiceQueueNative(pre, que)

	audioAntrian = new Audio(AudioAssets.antrian)
	audioKosong = new Audio(AudioAssets.kosong)
	audioSatu = new Audio(AudioAssets.satu)
	audioDua = new Audio(AudioAssets.dua)
	audioTiga = new Audio(AudioAssets.tiga)
	audioEmpat = new Audio(AudioAssets.empat)
	audioLima = new Audio(AudioAssets.lima)
	audioEnam = new Audio(AudioAssets.enam)
	audioTujuh = new Audio(AudioAssets.tujuh)
	audioDelapan = new Audio(AudioAssets.delapan)
	audioSembilan = new Audio(AudioAssets.sembilan)

	audioA = new Audio(AudioAssets.A)
	audioB = new Audio(AudioAssets.B)
	audioC = new Audio(AudioAssets.C)
	audioD = new Audio(AudioAssets.D)
	audioE = new Audio(AudioAssets.E)
	audioF = new Audio(AudioAssets.F)
	audioG = new Audio(AudioAssets.G)
	audioH = new Audio(AudioAssets.H)
	audioI = new Audio(AudioAssets.I)
	audioJ = new Audio(AudioAssets.J)

	function voiceValidation(params) {
    console.log('mmmmmmmmmmmmmmmmm 1', params)
    if(params === 0) {
      setTimeout(() => { 
        this.audioKosong.play();
      }, 3000);
    }
    else if(params === 1) {
      setTimeout(() => { 
        this.audioSatu.play();
      }, 3000);
    }else if(params === 2) {
      setTimeout(() => { 
        this.audioDua.play();
      }, 3000);
    }
    else if(params === 3) {
      setTimeout(() => { 
        this.audioTiga.play()
      }, 3000);
    }
    else if(params === 4) {
      setTimeout(() => { 
        this.audioEmpat.play()
      }, 3000);
    }
    else if(params === 5) {
      setTimeout(() => { 
        this.audioLima.play()
      }, 3000);
    }
    else if(params === 6) {
      setTimeout(() => { 
        this.audioEnam.play()
      }, 3000);
    }
    else if(params === 7) {
      setTimeout(() => { 
        this.audioTujuh.play()
      }, 3000);
    }
    else if(params === 8) {
      setTimeout(() => { 
        this.audioDelapan.play()
      }, 3000);
    }
    else if(params === 9) {
      setTimeout(() => { 
        this.audioSembilan.play()
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
        this.setState({
          myQueue: mq,
        })
        // console.log('success try')
      } catch {
        console.log('localStorage empty catch')

        this.setState({
          myQueue: 0,
        })
      }

    } else {

      this.audioAntrian.play();
      if(paramsTwo === 'A') {
        setTimeout(() => { 
          this.audioA.play();   
        }, 2000);
      }
      else if(paramsTwo === 'B') {
        setTimeout(() => { 
          this.audioB.play();   
        }, 2000);
      }
      else if(paramsTwo === 'C') {
        setTimeout(() => { 
          this.audioC.play();   
        }, 2000);
      }
      else if(paramsTwo === 'D') {
        setTimeout(() => { 
          this.audioD.play();   
        }, 2000);
      }
      else if(paramsTwo === 'E') {
        setTimeout(() => { 
          this.audioE.play();   
        }, 2000);
      }
      else if(paramsTwo === 'F') {
        setTimeout(() => { 
          this.audioF.play();   
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