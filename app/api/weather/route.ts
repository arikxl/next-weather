import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const lat = 31.6704;
        const lon = 34.5715;
        const apikey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`
        // console.log( url)

        const res = await axios.get(url)
        return NextResponse.json(res.data);

    } catch (error) {
        console.error(error);

        return new Response('Error fetching forecast data', { status: 500 });
    }
}