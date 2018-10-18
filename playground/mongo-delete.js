const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,client)=>{
    if(err){
        return Console.log('Unable to connect to Database!');
    }
    console.log('CONNECTED!');
    const db=client.db('TodoApp');
    // db.collection('todos').deleteMany({c}).then(result=>{
    //     console.log(result);
    // });
    // db.collection('todos').deleteOne({text:'Walk Golu'});
    db.collection('todos').findOneAndDelete({completed:true}).then(result=>{
        console.log(result);
    });
    client.close();
});