const request=require('request')
const geocode=(address,callback)=>{
    const url="https://us1.locationiq.com/v1/search?key=pk.e30d29fc625666f638eb225fa1fcefb9&city="+encodeURIComponent(address)+"&format=json"
    request({url,json:true},(error,{body}={})=>{
        if (error){
            callback("unable to connect to location services",undefined)
        }
        else if(body.error){
            callback(body.error,undefined)
        }
        else{
            const latitude=body[0].lat
            const longitude=body[0].lon
            const location=body[0].display_name
            data={
                location:location,
                latitude:latitude,
                longitude:longitude
            }
            callback(undefined,data)
        }
    })
}
module.exports=geocode