import { asHTML, asText } from "@prismicio/helpers";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createClient } from "../../../services/prismic";
import styles from '../post.module.scss';

type PostPreviewProps = {
    slug: string,
    title:string,
    content:string,
    updatedAt:string,
}

const PostPreview = ({content , slug , updatedAt , title}:PostPreviewProps) => {
    
    const { data: session } = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if(session.activeSubscription){
            router.push(`/posts/${slug}`);
        }

    },[session]);


    return(
        <>
            <Head>
                <title>{title} | Ignews </title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{title}</h1>
                    <time>{updatedAt}</time>

                    <div 
                    dangerouslySetInnerHTML={{__html:content}} 
                    className={`${styles.postContent} ${styles.previewContent}`}
                    />
                </article>

                <div className={styles.continueReading}>
                    Wanna continue Reading?
                    <Link href="/">
                        <a href="">
                            Subscribe Now
                        </a>
                   </Link>
                </div>
            </main>
        </>
    )
}

export default PostPreview;

export const getStaticPaths = () => {
    return{
        paths: [],
        fallback:'blocking',
    }
}


export const getStaticProps:GetStaticProps = async({params}) => {
    
    const { slug } = params;

    if (slug === 'favicon.png') {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
    }

    const client = createClient();

    const response = await client.getByUID('post' , String(params.slug), {}); 

    const post = {
        slug,
        title:asText(response.data.title),
        content:asHTML(response.data.content.slice(0,3)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
            day:'2-digit',
            month:'long',
            year:'numeric'
        }),
    }

    return{
        props: post,
        redirect: 60 * 30 //30 min
    }



}