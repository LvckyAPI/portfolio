'use server';
import "dotenv/config";
import axios from "axios";
import {eR24Cache} from "../cache/eR24Cache";


export async function fetchSiteNotice() {
    if (eR24Cache.has('site-notice')) return eR24Cache.get('site-notice');

    if (!process.env.ER24_PLUGIN_KEY || !process.env.ER24_API_KEY) return {
        html_de: "<h1>NO API KEY</h1>",
        html_en: "<h1>NO API KEY</h1>",
    };

    const siteNotice = await axios.get(
        'https://api.e-recht24.de/v2/imprint',
        {
            headers: {
                'eRecht24-plugin-key': process.env.ER24_PLUGIN_KEY,
                'eRecht24-api-key': process.env.ER24_API_KEY,
            }
        }
    ).then((response) => response.data)

    eR24Cache.set('site-notice', siteNotice);
    return siteNotice;
}

export async function getSiteNoticeInfo() {
    return await fetchSiteNotice().then(res => res);
}
