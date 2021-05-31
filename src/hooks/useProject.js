import {graphql, useStaticQuery} from 'gatsby';

const useProject = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiProjects {
                nodes {
                    id
                    title
                    description
                    demoUrl
                    backendRepo
                    frontendRepo
                    language {
                        language
                    }
                    image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1200, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 0 }) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    project_categories {
                        id
                        esName
                        enName
                    }
                }
            }
        }

    `)
    return resultado.allStrapiProjects.nodes;
}
 
export default useProject;