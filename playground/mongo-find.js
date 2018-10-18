const mongoDb=require('mongodb').MongoClient;

mongoDb.connect('mongodb://127.0.0.1:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Error Occured while connectin! ');
    }
    console.log('Connected');
    const db=client.db('TodoApp');
    db.collection('Users').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });
    client.close();
})