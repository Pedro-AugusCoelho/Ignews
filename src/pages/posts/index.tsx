import { GetStaticProps } from 'next';
import Head from 'next/head';
import { endpoint, createClient } from '../../services/prismic';
import styles from './styles.module.scss';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';


type Post = {
    slug: string,
    title:string,
    excerpt:string,
    updatedAt:string,
}

interface PostsProps {
    posts:Post[]
}

const Posts = ({ posts }:PostsProps) => {
    return(
        <>
            <Head>
                <title>Posts | IgNews</title>
            </Head>

            <main className={styles.container}>
                
                <div className={styles.posts}>
                    {posts.map((item)=> (
                        <Link  href={`/posts/${encodeURIComponent(item.slug)}`} key={item.slug}>
                            <a>
                                <time>{item.updatedAt}</time>
                                <strong>{item.title}</strong>
                                <p>{item.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
};

export default Posts;

export const getStaticProps:GetStaticProps = async({previewData}) => {
    
    const client = createClient();
  
    const response = await client.getAllByType('20020319');


    const posts = response.map((post) => {
        return{
            slug: post.uid,
            title:prismicH.asText(post.data.title),
            excerpt:post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day:'2-digit',
                month:'long',
                year:'numeric'
            }),
        }
    });

    return {
      props: { posts },
    }
}