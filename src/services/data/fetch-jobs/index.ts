import puppeteer from "puppeteer"
import { fetchAtlassianJobs } from "./attlassian";

export const fetchJobs = async () => {
    try {
        console.log('creating browser instance');
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        console.log('getting atlassian jobs')
        await fetchAtlassianJobs(page);

        await browser.close();

    } catch (error) {
        console.log(error);
    }
}