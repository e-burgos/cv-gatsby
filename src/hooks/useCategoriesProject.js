import {graphql, useStaticQuery} from 'gatsby';

const useCategoriesProject = () => {
    
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
                        descriptionEs
                        descriptionEn
                        access
                        demoUrl
                        backendRepo
                        frontendRepo
                        image {
                            localFile {
						        childImageSharp {
							        fluid(maxWidth: 600, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 0 }) {
								        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return resultado.allStrapiProjectCategories.nodes;
}
 
export default useCategoriesProject;