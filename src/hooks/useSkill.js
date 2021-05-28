import {graphql, useStaticQuery} from 'gatsby';

const useSkill = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiSkills{
                nodes {
                    id
                }
            }
        }
    `)
    return resultado.allStrapiSkills.nodes;
}
 
export default useSkill;