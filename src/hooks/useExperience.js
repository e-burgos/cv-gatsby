import {graphql, useStaticQuery} from 'gatsby';

const useExperience = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiExperience {
                nodes {
                    id
                    position
                    company
                    companyUrl
                    startDate
                    endDate
                    place
                    timeJob
                    description
                    status
                    yearsJob
                    projects {
                            id
                            title
                            demoUrl
                            description
                            image {
                                localFile {
                                    publicURL
                                }
                            }
                        }
                    language {
                        language
                    }
                }
            }
        }
    `)
    return resultado.allStrapiExperience.nodes;
}
 
export default useExperience;