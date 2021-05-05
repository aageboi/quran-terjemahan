import { useRouter } from 'next/router'
import SurahType from '../../types/surah'
import SurahLayout from '../../components/surah-layout'
import Container from '../../components/container'
import Navigation from '../../components/navigation'
import React from 'react'
import SurahTitle from '../../components/surah-title'
import Head from 'next/head'
import SurahHeader from '../../components/surah-header'
import SurahBody from '../../components/surah-body'
import { getSurahBySlug, getAllSurahs } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Link from 'next/link'

type Surahs = {
  surah: SurahType
}
const Surah = ({ surah }: Surahs) => {
 const router = useRouter()
 return (
  <SurahLayout surah={surah}>
    <Navigation surah={surah} />
    <Container>
      {router.isFallback ? (
        <SurahTitle>Loading...</SurahTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {surah.title}
              </title>
            </Head>
            <SurahHeader
              title={surah.title}
            />
            <SurahBody content={surah.content} />
          </article>
        </>
      )}
    </Container>
  </SurahLayout>
 )
}

export default Surah

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const surah = getSurahBySlug(params.slug, [
    'name',
    'title',
    'no',
    'slug',
    'next',
    'prev',
    'content'
  ])

  const content = await markdownToHtml(surah.content || '')

  return {
    props: {
      surah: {
        ...surah,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const surahs = getAllSurahs(['slug'])

  return {
    paths: surahs.map((surahs) => {
      return {
        params: {
          slug: surahs.slug
        }
      }
    }),
    fallback: false
  }
}