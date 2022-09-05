import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    //Get file names under /post
    const fileNames = fs.readdirSync(postsDirectory);

    const allpostsData = fileNames.map((fileName) => {
        // remove .md file extension to get an id
        const id = fileName.replace(/\.md$/, '');

        // read .md file as a string
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf-8')

        // use gray-matter to parse the file metadata
        const metadata = matter(fileContents)

        return {
            id,
            ...metadata.data as { date: string; title: string }
        };
    })

    return allpostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })


}
