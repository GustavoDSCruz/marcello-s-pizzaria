export default function tempo(request, response){
    const dynamicDate = new Data();

    response.json({
        date: dynamicDate.toGMTString()
    })
}