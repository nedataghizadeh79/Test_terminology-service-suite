import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Breadcrumb from "./components/Breadcrumb";
import {EntityOntoListWidget, GraphViewWidget, SearchResultsListWidget} from "@ts4nfdi/terminology-service-suite";
import GraphicWidget from "./components/Graphicalwidget";
import Autocomplete from "./components/Autocomplete";
import SearchResultsList from "./components/SearchResultsListWidget";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div style={{padding: 24, maxWidth: 800}}>
                <h2>Terminology Service Suite</h2>

                <hr style={{margin: "24px 0"}}/>

                {/*<Breadcrumb/>*/}
                {/*<GraphicWidget/>*/}
                {/*<Autocomplete/>*/}
                {/*<SearchResultsList/>*/}



        {/*// cant load the component*/}
                {/*<EntityOntoListWidget*/}
                {/*    api="https://www.ebi.ac.uk/ols4/api/"*/}
                {/*    entityType="term"*/}
                {/*    iri="http://www.ebi.ac.uk/efo/EFO_0000400"*/}
                {/*    onNavigateToOntology={function dye(){}}*/}
                {/*    ontologyId="efo"*/}
                {/*    parameter=""*/}
                {/*/>*/}


            </div>
        </QueryClientProvider>
    );
}
