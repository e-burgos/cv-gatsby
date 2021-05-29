import {graphql, useStaticQuery} from 'gatsby';

const useProject = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiProjectCategories {
                nodes {
                    id
                    slug
                    esName
                    enName
                    projects {
                        id
                        title
                        description
                        demoUrl
                        backendRepo
                        frontendRepo
                        image {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `)
    return resultado.allStrapiProjectCategories.nodes;
}
 
export default useProject;