import { client } from "@/libs/client";


export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const data = await client.get({endpoint:"news",contentId:id})
    return{
        props:{
            news:data,
        }
    }
}

export const getStaticPaths = async () =>{
    const data = await client.get({endpoint:"news"})
    const paths = data.contents.map((content)=>`/news/${content.id}`)
    return{
        paths,
        fallback:false,
    }
}

export default function NewsId({news}){
    console.log("news",news)
    return(
        <main>
            <h1>{news.title}</h1>
            <p>{news.publishedAt}</p>
            <p>{news.body}</p>
        </main>
    )
}