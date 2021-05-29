import {graphql, useStaticQuery} from 'gatsby';

const useCourse = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCourses {
                nodes {
                    id
                    degree
                    institution
                    date
                    urlcourse
                    language {
                        language
                    }
                }
            }
        }
    `)
    return resultado.allStrapiCourses.nodes;
}
 
export default useCourse;