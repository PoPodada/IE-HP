import { client } from "@/libs/client";


export const getStaticProps = async (context) =>{
    const id = context.id;
    const data = await client.get({endpoint:"news",contentId:id})
    console.log(data)
    return{
        props:{
            news:data,
        }
    }
}

export const getStaticPaths = async () =>{
    const data = await client.get({endpoint:"news"})
    const paths = data.contents.map((content)=>`/news/${content.id}`)
    console.log("よばれた")
    return{
        paths,
        fallback:false,
    }
}
export default function NewsId({news}){
    return(
        <main>
            <h1>{news.title}</h1>
            <p>{news.publishedAt}</p>
            <p>{news.body}</p>
        </main>
    )
}