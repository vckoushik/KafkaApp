const {kafka} =require('./client');

async function init(){
    const producer = kafka.producer();
    console.log('Connecting Producer');
    await producer.connect();
    console.log('Producer Connected');
    location = "north"
    //Produce Message
    await producer.send({
        topic:'rider-updates',
        messages:[
            {
                partition: location.toLowerCase() === "north"?0:1,
                key:'location-update',
                value: JSON.stringify({name:"Koushik",location})
            },
            
        ],
    });

    await producer.disconnect();
}

init();