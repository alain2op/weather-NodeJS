const request=require('request')
const yargs=require('yargs')
const geocode=require('./geocode')
const forecast=require('./forecast')


yargs.command({
    command: 'forecast',
    describe: 'forecast of a location',
    builder: {
        location:{
            describe: "location to get the weather forecast",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        geocode(argv.location,(error,geocode_data)=>{
            if (typeof geocode_data==='undefined'){
                console.log(error)
            }
            else{
                console.log(geocode_data)
                forecast(geocode_data.latitude,geocode_data.longitude,0,(error,forecast_data)=>{
                    if(typeof forecast_data==='undefined'){
                        console.log(error)
                    }
                    else{
                        console.log(forecast_data)
                    }   
                })
        }
    })
}})



yargs.parse()