import React from "react";
import {SearchResultsListWidget} from "@ts4nfdi/terminology-service-suite";


export default function SearchResultsList(){
    return (
        <div style={{height: "auto", width: "auto", overflow: "auto"}}>
            <SearchResultsListWidget
                api="https://semanticlookup.zbmed.de/ols/api/"
                initialItemsPerPage={10}
                itemsPerPageOptions={[10, 25, 50, 100]}
                parameter="collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"
                preselected={[]}
                query="d*"
                targetLink=""
                useLegacy
            />
        </div>
    )
}
