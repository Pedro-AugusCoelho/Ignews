import { asHTML, asText } from "@prismicio/helpers";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { createClient } from "../../services/prismic";

type PostProps = {
    slug: string,
    title:string,
    excerpt:string,
    updatedAt:string,
}

const Post = ({excerpt , slug , updatedAt , title}:PostProps) => {
    
    return(
        <>
            ...
        </>
    )
}

export default Post;


export const getServerSideProps:GetServerSideProps = async({req , params}) => {
    
    const session = await getSession({req});
    
    const { slug } = params;
    
    const prismic = createClient(req);

    const response = await prismic.getByUID('post' , String(slug));

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
        props: { post }
    }
    //if(!session){
    //}


}