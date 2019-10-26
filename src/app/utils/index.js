export class Utils {

  constructor(){}

  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=> {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return Math.floor(new Date() / 1000)+"-"+ x;
  }


  getEnv() {
    let environment = '';
    let origin = `https://${window.location.hostname}/`
    let projectId = ''
    const host = window.location.hostname
    if(host === 'tpdzone.firebaseapp.com' || host === 'tpdzone.web.app'){
      environment = 'TPD'
      projectId = 'tpdzone'
    } else if(host === 'disd-aaa.firebaseapp.com' || host === 'disd-aaa.web.app' || host === 'localhost'){
      environment = 'TRKMMV'
      projectId = 'trkmmv'
    }else if(host === 'trkmmvzone.firebaseapp.com' || host === 'trkmmvzone.web.app'){
      environment = 'TRKMMV'
      projectId = 'trkmmv'
    }else if(host === 'dishzone.firebaseapp.com' || host === 'dishzone.web.app'){
      environment = 'TPD'
      projectId = 'tpdzone'
    }

    return {environment, origin, projectId};
  }

  toHHMMSS(timeInSecond) {
    let sec_num = parseInt(timeInSecond, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  setLocalStorageData(key, value){
    if(window.localStorage){
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorageData(key){
    if(window.localStorage){
      let data = localStorage.getItem(key);
      if(data){
        data = JSON.parse(data);
      }
      return data;
    }
  }

  displayDateFormatter(timeStamp) {
    let ts = timeStamp.toString().length > 10 ? timeStamp : timeStamp * 1000;
    let d = new Date(ts);
    let minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    let hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    let ampm = d.getHours() >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let month = (d.getMonth() < 10 ? '0' : '')+(d.getMonth()+1);
    return d.getDate()+'-'+month+'-'+d.getFullYear()+' : '+hours+':'+minutes+" "+ampm;
  }

  getTodayDate() {
    let dt = new Date();
    let month = dt.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    return dt.getFullYear() + "-" + month + "-" + day;
  }
}
