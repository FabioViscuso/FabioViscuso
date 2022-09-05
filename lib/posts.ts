import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
            return -1;
        } else {
            return 0;
        }
    })
}

export function getPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        // returns something like { params: { id: 'pre-rendering' } }
        // this object is ready to be passed to getStaticProps() where needed
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    // step 1: locate file to read
    const filePath = path.join(postsDirectory, `${id}.md`);
    // step 2: write file content in a const
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    // step 3: parse the md file content with gray-matter
    const parsedContent = matter(fileContents);
    // step 4: use remark to convert markdown into html
    const processedFromRemark = await remark().use(html).process(parsedContent.content);
    const htmlContent = processedFromRemark.toString();
    // step 5: return the id along with the parsed content data
    return {
        id,
        htmlContent,
        ...parsedContent.data
    };
}
