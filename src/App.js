import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Breadcrumb from "./components/Breadcrumb";
import {GraphViewWidget, SearchResultsListWidget} from "@ts4nfdi/terminology-service-suite";
import GraphicWidget from "./components/Graphicalwidget";
import Autocomplete from "./components/Autocomplete";

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

                <div style={{height: "auto", width: "auto",  overflow: "auto"}}>
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


            </div>
        </QueryClientProvider>
    );
}
