import {GraphViewWidget} from "@ts4nfdi/terminology-service-suite";
import React from "react";

export default function GraphicWidget  ()  {
    return(
        <GraphViewWidget
            api="https://api.terminology.tib.eu/api/"
            iri="http://purl.obolibrary.org/obo/CHEBI_24870"
            onNavigateTo={function dye() {
            }}
            onNodeClick={function dye() {
            }}
            ontologyId="chebi"
            targetIri=""
        />

    )

}
