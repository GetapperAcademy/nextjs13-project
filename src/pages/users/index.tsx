import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { adminSessionOptions } from "@/lib/session";
import { ObjectId } from "mongodb";
import { Typography } from "@mui/material";

type UsersListProps = {
  admin: any;
};

const UsersList = memo(({ admin }: UsersListProps) => {
  return (
    <>
      <AppHead title="UsersList" description="" />
      <Typography>ciao {admin.name}</Typography>
    </>
  );
});
UsersList.displayName = "UsersList";

export default UsersList;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({
    req: { session, cookies, headers },
  }: GetServerSidePropsContext<{}>): Promise<
    GetServerSidePropsResult<UsersListProps>
  > {
    if (!session?.admin) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const admin = await Admin.getById(new ObjectId(session.admin._id));
    if (!admin) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        admin,
      },
    };
  },
  adminSessionOptions,
);
