import React, { useEffect } from 'react'

const Helmet = ({ title, description, keywords, schemaMarkup }) => {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            let metaDesc = document.querySelector("meta[name='description']");
            if (!metaDesc) {
                metaDesc = document.createElement("meta");
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = description;
        }
        if (keywords) {
            let metaKeywords = document.querySelector("meta[name='keywords']");
            if (!metaKeywords) {
                metaKeywords = document.createElement("meta");
                metaKeywords.name = "keywords";
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.content = keywords;
        }
        if (schemaMarkup) {
            let scriptTag = document.querySelector("script[type='application/ld+json']");
            if (scriptTag) scriptTag.remove();
        };
    }, [title, description, keywords, schemaMarkup]);

    return null;
};

export default Helmet

