import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    AutocompleteWidget,
    // BreadcrumbWidget,
} from "@ts4nfdi/terminology-service-suite";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ padding: 24, maxWidth: 800 }}>
                <h2>Terminology Service Suite</h2>

                <AutocompleteWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    placeholder="Search for a concept..."
                    selectionChangedEvent={(item) => {
                        console.log("Selected concept:", item);
                    }}
                />

                <hr style={{ margin: "24px 0" }} />



                {/*<BreadcrumbWidget*/}
                {/*    api="https://semanticlookup.zbmed.de/ols/api/"*/}
                {/*    colorFirst="warning"*/}
                {/*    colorSecond=""*/}
                {/*    entity={{*/}
                {/*        properties: {*/}
                {/*            iri: "http://purl.obolibrary.org/obo/NCIT_C2985",*/}
                {/*            ontologyId: "ncit",*/}
                {/*            shortForm: "NCIT_C2985",*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    onNavigateToOntology={() => {}}*/}
                {/*    ontologyId=""*/}
                {/*    shortForm=""*/}
                {/*/>*/}




            </div>
        </QueryClientProvider>
    );
}
