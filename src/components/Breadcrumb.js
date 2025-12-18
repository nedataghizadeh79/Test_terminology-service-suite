import {
    BreadcrumbWidget,
} from "@ts4nfdi/terminology-service-suite";
import React from "react";

export default function Breadcrumb(){
    return(

        <BreadcrumbWidget
            api="https://semanticlookup.zbmed.de/ols/api/"
            colorFirst="warning"
            colorSecond=""
            entity={{
                properties: {
                    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
                    ontologyId: "ncit",
                    shortForm: "NCIT_C2985",
                },
            }}
            onNavigateToOntology={() => {}}
            ontologyId="ncit"
            shortForm="NCIT_C2985"
        />
    )

}
