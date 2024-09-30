request=require('request')
const forecast=(lat,lon,days=3,callback)=>{
    url="https://api.weatherapi.com/v1/forecast.json?key=b4507aea47974b3b8c4203104242706&q="+lat+","+lon+"&days="+days
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect to weather services",undefined)
        }
        else if(body.error){
            callback(body.error.message,undefined)
        }
        else{
            callback(undefined,body)
        }
    })
}
module.exports=forecast