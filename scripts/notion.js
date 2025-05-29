const NotionParse = require('@kodaps/notion-parse')
const dotenv = require('dotenv')

dotenv.config()

const go = async () => {
    console.log('Starting Notion parsing...');
    if (!process.env.NOTION_TOKEN) {
        console.error('Please set NOTION_TOKEN in your .env file.');
        return;
    }
    console.log('Using Notion Token:', process.env.NOTION_TOKEN);

    if (process.env.NOTION_TOKEN) {
        await NotionParse.parseNotion(process.env.NOTION_TOKEN, './src/content', [
            {
                databaseId: process.env.NOTION_PROJECTS_DATABASE_ID || '',
                contentType: 'projects',
            },
            {
                databaseId: process.env.NOTION_BLOGS_DATABASE_ID || '',
                contentType: 'blogs',
            },
        ])
    }

}

go().then(() => {
    console.log('Notion parsing completed.')
});