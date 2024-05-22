//Admin will setup the Kafka Topic, Partitions etc


const {kafka} = require('./client');

async function init(){
    const admin = kafka.admin();
    console.log("Connecting Admin .... ");
    await admin.connect();
    console.log("Admin Connection Success.");
    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
        topics:[
            {
                topic: 'rider-updates',
                numPartitions : 2,
            },
        ],
    });

    console.log("Topic Created");
    admin.disconnect();
    console.log("Admin Disconnected");
}

init();