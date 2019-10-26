
class FirebaseWrapper {

  constructor(){
    let config = {};
    firebase.initializeApp(config);
    this.db = firebase.database();;
    this.fireStore = firebase.firestore();;
    this.fireStore.settings({ timestampsInSnapshots: true });
  }

  uuidv4() {
    let x = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    return Math.floor(new Date() / 1000)+"-"+ x;
  }
  getObj(keys, values){
    let data = {}
    for(let i = 0; i < keys.length; i++){
      data[keys[i]] = values[i];
    }
    return data;
  }

  createTrigger(triggerName,action){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TRIGGER IF NOT EXISTS ${triggerName} AFTER ${action} ON balances FOR EACH ROW
      BEGIN
      INSERT INTO balances_history (
        amount,date,calcTill,calcOn,dueFrom, nextDueDate, customerId,type,p,si,rate,total,remarks,action)
      VALUES (new.amount,new.date,new.calcTill,new.calcOn,new.dueFrom,new.nextDueDate,new.customerId,new.type,new.p,
        new.si,new.rate,new.total,new.remarks,'${action}');
        END;`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  getTotalCountForTable(tableName){
    let p = this.fireStore.collection(tableName)
    .get()
    .then((snapShot)=>{
      return snapShot.docs.length
    })
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }

  insert(tableName ='', keys = [], values =[]){
    let data = this.getObj(keys, values)
    return this.fireStore.collection(tableName).doc(this.uuidv4()).add(data);
  }

  update(tableName ='', keys = [], values =[], conditionOn, id){
    let data = this.getObj(keys, values)
    let p = this.fireStore.collection(tableName)
    .where(conditionOn, '==', id)
    .update(data)
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }

  deleteRowById(tableName, id){
    let p = this.fireStore.collection(tableName).doc(id).delete()
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }

  deleteTableByName(tableName){
    let ps = []
    this.fireStore.collection(tableName).get()
    .then((snapshots) => {
      snapshots.forEach((doc) => {
        let data = doc.data();
        ps.push(this.fireStore.collection(tableName).doc(data.docId).delete())
      })
    })
    return Promise.all(ps);
  }

  selectAll(tableName){
    let p = this.fireStore.collection(tableName).get()
      .then((snapshots) => {
        let rows = []
        snapshots.forEach((doc) => {
          let data = doc.data();
          rows.push(data)
        })
        console.log('anp data', rows);
        return rows
    });
    return p;
  }

  wildCard(sql){
    let p = new Promise( (resolve, reject)=>{
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  selectAllById(tableName, key, value){
    let p = this.fireStore.collection(tableName)
    .where(key, '==', value)
    .get()
    .then((snapshots) => {
      let rows = []
      snapshots.forEach((doc) => {
        let data = doc.data();
        rows.push(data)
      })
      return rows
    })
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }
  selectAllByIdActive(tableName, key, value,conditionOn,value2){
    let p = this.fireStore.collection(tableName)
    .where(key, '==', value)
    .where(conditionOn, '==', value2)
    .get()
    .then((snapshots) => {
      let rows = []
      snapshots.forEach((doc) => {
        let data = doc.data();
        rows.push(data)
      })
      return rows
    })
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }
  //get data by year and month of selected data
   selectAllByYearMonth(tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE strftime('%Y', ${key}) = strftime('%Y', ${key}) AND strftime('%m', ${key}) = strftime('%m', ${key})`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  //get data between two dates with conditions
   selectDataByDates(tableName, key, value1, value2,conditionOn,value3){
    let p = this.fireStore.collection(tableName)
    .where(conditionOn, '==', value3)
    .where(key, '==', value)
    .where('active', '==', 1)
    .where(key, '>==', value1)
    .where(key, '<==', value2)
    .get()
    .then((snapshots) => {
      let rows = []
      snapshots.forEach((doc) => {
        let data = doc.data();
        rows.push(data)
      })
      return rows
    })
    .catch((err)=>{
      console.log('anp err', err);
    })
    return p;
  }

  //get data between two dates without conditions
  selectDataByDatesWithoutCondition(tableName, key, value1, value2){
   let p = new Promise( (resolve, reject)=>{
     let sql = `SELECT count(id) FROM ${tableName} WHERE active = 1 AND date(${key}) BETWEEN '${value1}' AND '${value2}' ORDER BY date(date)`
     this.db.all(sql, (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
 }

//get greater data and equal of selected date
  selectGreaterDataByDate(tableName,key,value){
    let p = new Promise( (resolve, reject)=>{
    let sql = `SELECT * from ${tableName} where date(${key}) >= date(${value})`

    this.db.all(sql, (err, data)=>{
      if(err) reject(err);
      resolve(data);
    });
  });
    return p;
  }

  //get less data of selected date
  selectLessDataByDate(tableName,key,value){
    let p = new Promise( (resolve, reject)=>{
    let sql = `SELECT * from ${tableName} where date(${key}) < date(${value})`
    this.db.all(sql, (err, data)=>{
      if(err) reject(err);
      resolve(data);
    });
  });
    return p;
  }

  updateStatus(tableName, key, value,conditionOn,id){
    let p = new Promise( (resolve, reject)=>{
      let sql = `UPDATE ${tableName} SET ${key} = ${value} WHERE ${conditionOn} =${id}`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  updateActiveStatus(tableName, key, value,conditionOn,id){
    let p = new Promise( (resolve, reject)=>{
      let sql = `UPDATE ${tableName} SET ${key} = ${value} WHERE ${conditionOn} =${id} AND active=1`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  bulkUpload(tableName, rows =[]){
    let p = new Promise( (resolve, reject)=>{
      if(rows.length == 0) resolve(`No data found for ${tableName}`);
      let keys = Object.keys(rows[0]) || [];
      let columns = keys.map((key) => `${key}`).join(',');
      let i = 0;
      for (let r of rows) {
        let values = Object.values(r);
        values = values.map((value) => `'${value}'`).join(',');
        let sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
          this.db.run(sql, [], (err, data)=>{
            if(err) reject(err);
            i++;
            if(i == rows.length) resolve(data);
          });
      }
    });
    return p;
  }
  selectAllTwoTable(table1,table2,columns,match1,match2,conditionOn=""){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT ${columns} FROM ${table1} LEFT JOIN ${table2} ON ${match1} = ${match2} ${conditionOn}`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  countTransactionByType(column, tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT ${column} FROM ${tableName} WHERE ${key} = '${value}'`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }


}
