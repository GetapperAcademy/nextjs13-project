import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";

type HelpProps = {
  helpRequests: number;
};

const Help = memo(({ helpRequests }: HelpProps) => {
  return (
    <>
      <AppHead title="Help" description="" />
      <div>Help</div>
      <div>{helpRequests}</div>
    </>
  );
});
Help.displayName = "Help";

export default Help;

export async function getServerSideProps({}: GetServerSidePropsContext<{}>): Promise<
  GetServerSidePropsResult<HelpProps>
> {
  const helpRequests = Math.random();
  return {
    props: {
      helpRequests,
    },
  };
}
