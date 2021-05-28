import React from 'react';

const EducationItem = () => {
    return ( 
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0"><a href="https://www.linkedin.com/company/udemy/" rel="noreferrer" target="_blank">Udemy</a>
                </h3>
                <div className="subheading">Desarrollador React Native</div>
                <div className="mb-3">
                    <span><a href="https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/" rel="noreferrer" target="_blank">Información de curso</a></span>
                </div>
                <p>Curso orientado a la creación de Apps para Android y iOS. Se promueve el uso de Frameworks UI para React Native como NativeBase y React Paper.
                Herramientas y temáticas del curso: GraphQL, Apollo Server con React, React Navigation v5, Firebase con React Native, Estilos a tus Apps y los diferentes componentes de React Native
                Consumir API's y mostrar sus resultados en React Native, Temas Intermedios de React Native como API's Storage Frameworks UI, Temas Avanzados de React como Apollo, MongoDB, Autenticación y más.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">Mayo 2021 - En curso</span></div>
        </div>
     );
}
 
export default EducationItem;