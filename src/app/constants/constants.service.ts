import { Injectable } from '@angular/core';
import {Constants} from './trkmmv.js';

@Injectable({ providedIn: 'root'})

export class ConstantsService {
  constructor(){}
  getConstants(institutionId){
    return Constants
  }

  getConstantsFromDB(institutionId){
    return 'constants'
  }
};
