import {graphql, useStaticQuery} from 'gatsby';

const useExperience = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiExperience{
                nodes {
                    id
                }
            }
        }
    `)
    return resultado.allStrapiExperience.nodes;
}
 
export default useExperience;