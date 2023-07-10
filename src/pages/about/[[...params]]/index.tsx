import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { GetStaticPathsResult } from "next";

type ExampleMultipleParamsProps = {};

const ExampleMultipleParams = memo(({}: ExampleMultipleParamsProps) => {
  return (
    <>
      <AppHead title="ExampleMultipleParams" description="" />
    </>
  );
});
ExampleMultipleParams.displayName = "ExampleMultipleParams";

export default ExampleMultipleParams;

export async function getStaticPaths(): Promise<GetStaticPathsResult<{}>> {
  return {
    paths: [
      {
        params: {
          params: ["3", "latest", "sortByDate"],
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({
  params: { params },
}: GetStaticPropsContext<{ params: string[] }>): Promise<
  GetStaticPropsResult<ExampleMultipleParamsProps>
> {
  const newsId = params[0];
  const newsType = params[1];
  const newsSort = params[2];
  return {
    props: {},
  };
}
