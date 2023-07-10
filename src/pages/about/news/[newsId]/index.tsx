import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type NewsDetailsProps = {
  news: {
    id: string;
    title: string;
  };
};

const NewsDetails = memo(({ news }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div>NewsDetails</div>
      <div>{news.id}</div>
      <div>{news.title}</div>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{
    newsId: string;
  }>
> {
  // Leggo dal DB FAKE tutti gli id delle news
  const newsList = [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];
  return {
    paths: newsList.map((news) => ({
      params: {
        newsId: news.id,
      },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params: { newsId },
}: GetStaticPropsContext<{ newsId: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  // Controllo se newsId è valido o esiste, se non esiste ritorno 404
  return {
    notFound: true,
  };
  // Altrimenti, Leggo dal DB FAKE la news con id = newsId
  const news = {
    id: newsId,
    title: "Titolo della news" + newsId,
  };
  return {
    props: {
      news,
    },
  };
}
