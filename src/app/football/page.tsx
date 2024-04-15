import { ArticleJsonLd, NextSeo } from "next-seo";

export default function page() {
  return (
    <div>
      <ArticleJsonLd
        useAppDir={true}
        title="football"
        description="all thing you should know about football"
        canonical="localhost:3000/footbal"
        openGraph={{
          url: "localhost:3000",
          title: " next-seo app",
          description: "this is very simple app for practice next-seo",
        }}
        url={""}
        images={[]}
        datePublished={""}
        authorName={undefined}
      />
      {/*  you  must wrtite next-seo in the <head> of your page !! */}
      {/* title : title of your page 
    description : you can write everything  about your page 
    canonical : you must write your page's link that is permanent and orginial
    openGraph(OG) : its about showing better in social medias
    for the more things  you can go the : https://www.npmjs.com/package/next-seo?activeTab=readme  <3
     */}
      this is the football page as you know :)
    </div>
  );
}
