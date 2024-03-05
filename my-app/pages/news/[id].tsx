import { client } from "@/libs/client";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

interface News{
    id:string;
    title:string;
    publishedAt:string;
    body:string;
}
interface NewsProps{
    news:News
}
export const getStaticProps:GetStaticProps<NewsProps> = async (context:GetStaticPropsContext) =>{
    const id = context.params?.id as string;
    const data = await client.get({endpoint:"news",contentId:id})
    return{
        props:{
            news:data,
        }
    }
}

export const getStaticPaths:GetStaticPaths = async () =>{
    const data = await client.get({endpoint:"news"})
    const paths = data.contents.map((content:{id:string})=>`/news/${content.id}`)
    return{
        paths,
        fallback:false,
    }
}

export default function NewsId({news}:NewsProps){
    console.log("news",news)
    return(
        <main>
            <h1>{news.title}</h1>
            <p>{news.publishedAt}</p>
            <div dangerouslySetInnerHTML = {{__html:`${news.body}`}}>
            </div>
            
        </main>
    )
}