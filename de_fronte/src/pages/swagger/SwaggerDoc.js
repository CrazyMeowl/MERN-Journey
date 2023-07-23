import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import api_doc from './api_doc.json'


export function SwaggerDoc() {
    return <h1><SwaggerUI spec={api_doc} /></h1>
}