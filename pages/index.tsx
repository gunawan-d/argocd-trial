import type {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Head>
        <title>ArgoCD V3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex flex-col justify-center bg-[#F5FAFE] md:bg-white">
        <div className="mx-auto text-center md:rounded-full md:w-[600px] md:h-[600px] md:bg-[#F5FAFE] py-24">
          <p className="text-[32px] text-primary font-bold mb-[24px] md:text-[64px] md:leading-[72px]">
            ArgoCD is under maintenance
          </p>
          <p className="text-[20px] leading-[24px] font-normal text-darkBlue md:text-[32px]">
            We’re preparing to serve you better.
          </p>
          <img
            src="/plug.svg"
            width="100%"
            height="20px"
            className="absolute top-[500px] md:top-[480px] left-0"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
