import React from "react";
import clsx from "clsx";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
import Unlisted from "@theme/Unlisted";
import styles from "./styles.module.css";
import TOCCollapsible from "@theme/TOCCollapsible";

export default function MDXPage(props) {
  const { content: MDXPageContent } = props;
  const {
    metadata: { title, description, frontMatter, unlisted },
    assets,
  } = MDXPageContent;
  const {
    keywords,
    wrapperClassName,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const image = assets.image ?? frontMatter.image;
  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage,
      )}
    >
      <Layout>
        <PageMetadata
          title={title}
          description={description}
          keywords={keywords}
          image={image}
        />
        <main className="">
          <div className={clsx("row mx-0", styles.mdxPageWrapper)}>
            {!hideTableOfContents && MDXPageContent.toc.length > 0 && (
              <div className="sidebar">
                <TOC
                  toc={MDXPageContent.toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level}
                  maxHeadingLevel={frontMatter.toc_max_heading_level}
                />
              </div>
            )}
            <div
              className={clsx(
                "col max-w-7xl",
                !hideTableOfContents && "col--8 p-0",
              )}
            >
              {unlisted && <Unlisted />}
              <article className="m-w-4xl p-4">
                <div className="display mobile-toc-container">
                  <TOCCollapsible
                    toc={MDXPageContent.toc}
                    minHeadingLevel={frontMatter.toc_min_heading_level}
                    maxHeadingLevel={frontMatter.toc_max_heading_level}
                  />
                </div>
                <MDXContent>
                  <MDXPageContent />
                </MDXContent>
              </article>
            </div>
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
