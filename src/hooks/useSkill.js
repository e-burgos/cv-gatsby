import {graphql, useStaticQuery} from 'gatsby';

const useSkill = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiSkillsCategories(sort: {fields: id}) {
                nodes {
                    id
                    slug
                    esName
                    enName
                    skills {
                        id
                        name
                        url
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
    return resultado.allStrapiSkillsCategories.nodes;
}
 
export default useSkill;