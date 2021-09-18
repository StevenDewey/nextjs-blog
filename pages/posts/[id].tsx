import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'


import { getAllPostIds } from '../../lib/posts'
import { getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export default function Post({ postData }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
  }) {
  return (
    <Layout>
       <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
  </Layout>
  )
}