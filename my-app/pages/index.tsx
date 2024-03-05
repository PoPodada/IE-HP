import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import {client} from "../libs/client"
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import { Header } from "./components/header";
const inter = Inter({ subsets: ["latin"] });
interface NewsItem{
  id:string;
  title:string;
  body:string;
}
interface Props {
  news:NewsItem[];
}
export default function Home({news}:Props) {
  return (
    
    <div>
      <Header/>
      {news.map((news)=>(
        <li key={news.id}>
          <Link href={`news/${news.id}`}>
            {news.title}
          </Link>
        
        
        </li>
      ))}
    </div>
  );
}
export const getStaticProps = async () =>{
  const data = await client.get({endpoint:"news"})
  return{
    props:{
      news:data.contents,
    }
  }
}
