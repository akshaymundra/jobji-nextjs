import * as cheerio from 'cheerio'
import { Page } from 'puppeteer';

const companyUrl = 'https://www.atlassian.com'

export const fetchAtlassianJobs = async (page: Page) => {

    try {
        await page.goto('https://www.atlassian.com/company/careers/all-jobs');
        const html = await page.content();

        const $ = cheerio.load(html);

        const jobs = $('table tr').map((i, el) => {
            const title = $(el).find('td a').text();
            const link = $(el).find('td a').attr('href');
            const location = $(el).find('td:eq(1)').text();
            const company = 'Atlassian'
            return {
                title,
                link: `${companyUrl}${link}`,
                location,
                company
            }
        }).toArray();

        console.log(jobs);

    } catch (error) {
        console.log(error);
    }

}
