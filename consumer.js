const {kafka} =require('./client');
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({groupId:"user-1"});
    console.log('Connecting Consumer');
    consumer.connect();
    console.log('Consumer Connected');

    await consumer.subscribe({topics:["rider-updates"],fromBeginning:true});

    // We run the method for each message
    await consumer.run({
        eachMessage:async ({topic, partition, message,heartbeat, pause}) =>{
            console.log(`[${topic}]: PART:${partition} `, message.value.toString())
        }
    });
}

init();