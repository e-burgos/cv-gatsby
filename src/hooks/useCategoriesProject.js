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
                    language {
					    language
      	            }
                    projects {
                        id
                        title
                        description
                        demoUrl
                        backendRepo
                        frontendRepo
                        image {
                            localFile {
						        childImageSharp {
							        fluid(maxWidth: 1200, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 0 }) {
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