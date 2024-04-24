import { fetchJobs } from "@/services/data/fetch-jobs";

export async function GET(req: Request) {

    console.log('Fetching jobs')

    await fetchJobs();

    return Response.json({ message: 'Jobs fetched' });

}