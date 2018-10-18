const mongoDb=require('mongodb').MongoClient;
mongoDb.connect('mongodb://127.0.0.1:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Error while Connecting!');
    }
    console.log('Connected to the Server');
    const db=client.db('TodoApp');
    db.collection('Users').insertOne({
        name:'Aashish',
        age:22,
        location:'india'
    },(err,result)=>{
        if(err){
            return console.log('Error Occured ',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});