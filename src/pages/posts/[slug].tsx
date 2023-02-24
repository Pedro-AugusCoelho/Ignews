import { asHTML, asText } from "@prismicio/helpers";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { createClient } from "../../services/prismic";
import styles from './post.module.scss';
import { GoBackPage } from "../../components/GoBackPage";

type PostProps = {
    slug: string,
    title:string,
    content:string,
    updatedAt:string,
}

const Post = ({content , slug , updatedAt , title}:PostProps) => {
    
    return(
        <>
            <Head>
                <title>{title} | Ignews </title>
            </Head>

            <main className={styles.container}>

                <GoBackPage redirect="/posts" />
                
                <article className={styles.post}>
                    <h1>{title}</h1>
                    <time>{updatedAt}</time>

                    <div 
                    dangerouslySetInnerHTML={{__html:content}} 
                    className={styles.postContent}
                    />
                </article>
            </main>
        </>
    )
}

export default Post;


export const getServerSideProps:GetServerSideProps = async({req , params}) => {
    
    const session = await getSession({req});

    if(!session?.expires){
        return {
            redirect:{
                destination: '/',
                permanent:false,
            },
        }
    }
    
    const { slug } = params;

    if (slug === 'favicon.png') {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
    }

    const client = createClient(req);

    const response = await client.getByUID('post' , String(params.slug), {}); 

    const post = {
        slug,
        title:asText(response.data.title),
        content:asHTML(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day:'2-digit',
            month:'long',
            year:'numeric'
        }),
    }

    return{
        props: post
    }


}