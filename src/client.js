import * as contentful from 'contentful';

export const client = contentful.createClient({
    space:process.env.REACT_APP_CONTETNFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_ACCESS_TOKEN,
})