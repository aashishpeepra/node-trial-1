const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to Database!');
    }
    console.log('CONNECTED!');
    const db=client.db('TodoApp');
    // db.collection('todos').updateOne(
    //     {_id:new ObjectID("5bc89f10faae56492889c6ff")},
    //     {$set:{completed:false}}
    // ).then(result=>console.log(result));
    db.collection('todos').updateMany(
        {completed:false},
        {$set:{completed:true},
        $currentDate:{lastModified:true}}
    ).then(result=>console.log(result));
    client.close();
});