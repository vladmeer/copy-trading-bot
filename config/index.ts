import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const heliusPOST = async (uri: string, data: any) => {
    const returnData = await axios.post(`https://api.helius.xyz/v0/token-metadata?api-key=80e81ffd-0711-42b9-afac-e64d099b279e`, data)
    return returnData.data
}

export const getTokenPrice = async (tokenAddr : string) => {
    const tokenAPrice = await axios.get(`https://api.geckoterminal.com/api/v2/simple/networks/solana/token_price/${tokenAddr}`);
    return parseFloat(tokenAPrice.data.data.attributes.token_prices[tokenAddr])
}

export const getDomainAcc = async (programAddr : string) => {
    const domain = await axios.get(`https://api.solana.fm/v0/accounts/${programAddr}`)
}

export const getAllTokenPrice = async () => {
    const prices = (await axios.get("https://api.raydium.io/v2/main/price")).data
	// console.log("update token List")
    return prices;
}