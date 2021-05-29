import {graphql, useStaticQuery} from 'gatsby';

const useEducation = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiEducation {
                nodes {
                    id
                    institution
                    infoUrl
                    degree
                    certificateUrl
                    description
                    startDate
                    endDate
                    language {
                        language
                    }
                }
            }
        }
    `)
    return resultado.allStrapiEducation.nodes;
}
 
export default useEducation;