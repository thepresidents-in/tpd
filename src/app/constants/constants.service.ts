import { Injectable } from '@angular/core';
import {TPD} from './tpd.js';
import {TRKMMV} from './trkmmv.js';
import {DISH} from './dish.js';

@Injectable({ providedIn: 'root'})

export class ConstantsService {
  constructor(){}

  getConstants(){
    const host = window.location.hostname
    if(host === 'tpdzone.firebaseapp.com' || host === 'tpdzone.web.app'){
      return TPD
    } else if(host === 'disd-aaa.firebaseapp.com' || host === 'disd-aaa.web.app' || host === 'localhost'){
      return TRKMMV
    }else if(host === 'trkmmvzone.firebaseapp.com' || host === 'trkmmvzone.web.app'){
      return TRKMMV
    }else if(host === 'dishzone.firebaseapp.com' || host === 'dishzone.web.app'){
      return DISH
    }
  }

  getConstantsFromDB(institutionId){
    return 'constants'
  }
};
