import {graphql, useStaticQuery} from 'gatsby';

const useAbout = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiAbout{
                nodes {
                    id
                    name
                    lastname
                    avatar {
                        localFile {
                            publicURL
                        }
                    }
                    description
                    email
                    phone
                    address
                    linkedin
                    github
                    blog
                    language {
                        language 
                    }
                }
            }
        }
    `)
    return resultado.allStrapiAbout.nodes;
}
 
export default useAbout;