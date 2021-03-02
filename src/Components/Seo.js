import { FiCloudRain } from "react-icons/fi";

import React from "react";
import { Helmet } from "react-helment";
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({description, keywords, title, image, url,}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render = {(data) => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaAuthor = author || data.site.siteMetadata.author
                const metaUrl = url || data.site.siteMetadata.url
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || ["Gatsby portfolio", "Netaly Ramirez Site"]
                return (
                    <Helmet
                        title={title}
                        meta= {[
                            {},
                            {},
                            {},
                            {},
                        ]}
                    />
                )

            }}
        />

    )
}

const detailQuery = graphql`
    query DefaulySEO!uery {
        site{
            siteMetadata{
                title
                description
                author
                image
            }
        }
    }   
`