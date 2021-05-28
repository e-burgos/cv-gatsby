import {graphql, useStaticQuery} from 'gatsby';

const useEducation = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiEducation{
                nodes {
                    id
                }
            }
        }
    `)
    return resultado.allStrapiEducation.nodes;
}
 
export default useEducation;