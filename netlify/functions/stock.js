const apiKey = process.env.FINNHUB_API_KEY;

exports.handler = async function(event){
    const symbol = event.queryStringParameters.symbol;
    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    const response = await fetch(url)
    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }

};