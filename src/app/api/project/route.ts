import getNotionData from "@/app/actions/getNotionApi";
import { NextResponse } from "next/server";

export async function  GET(request: Request){
    const notionData = await getNotionData()
    const extractedData = notionData?.map((item) => {
        if ('cover' in item! && 'properties' in item && 'public_url' in item) {
          return {
            cover: item.cover,
            public_url: item.public_url,
            tag: item.properties['tag'],
            title: item.properties['name'],
          };
        } else {
          // 원하는 대응을 정의하세요. 예를 들면 default 값을 설정하거나 에러를 처리할 수 있습니다.
          return { error: 'Invalid data structure' };
        }
      });
    // console.log(extractedData)
    return NextResponse.json(extractedData)
}