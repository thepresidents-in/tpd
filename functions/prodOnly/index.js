module.exports = class ProdOnly {
  constructor(xporter, functions, projectId, firestoredb, cron){
    this.functions = functions
    this.projectId = projectId
    this.firestoredb = firestoredb
    this.cron = cron
    this.exports = xporter
    this.projectIdProd = 'xyz'
  }

  deployLastCronOfTheDay(){
    if(this.projectId === this.projectIdProd){
      //     '*/30 8-9,22 * * *'
      //      '*/5 10-21 * * *'
      this.exports.lastCronOfTheDay = this.functions.pubsub.schedule('55 23 * * *')
      .timeZone('Asia/Kolkata')
      .onRun((context) => {
          return this.cron.camerasCronToUpdate(this.firestoredb, this.firestoredb, 'fullday')
      });
    }
  }

  deploy(){
    this.deployLastCronOfTheDay()
  }
}
