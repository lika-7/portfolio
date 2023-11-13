import { Client } from '@notionhq/client';


const NOTION_API_KEY = 'secret_QRpdpsQ6GxQHtMUAUVMIURnME3aAferFi6XtwWvDLb9';
const DATABASE_ID = '8c1ae5ed8b6d401392a0286639f17951';

const notion = new Client({
    auth: NOTION_API_KEY
  });

export default async function getNotionData() {
    try {
        // Notion 데이터베이스 쿼리
        const response = await notion.databases.query({
        database_id: DATABASE_ID,
        })
        // console.log(response)
        const data = response.results.map((result) => {
            if('cover'in result && 'properties'in result && 'public_url'in result){
                return{
                    cover: result.cover,
                    properties: result.properties,
                    public_url: result.public_url,
                }
            }
            return
        })

        return data
        

    } catch (error) {
        console.error('Error fetching Notion data:', error)
    }
}