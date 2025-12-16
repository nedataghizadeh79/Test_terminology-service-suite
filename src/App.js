import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AutocompleteWidget } from "@ts4nfdi/terminology-service-suite";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ padding: 24, maxWidth: 700 }}>
                <h2>Terminology Service Suite</h2>

                <AutocompleteWidget
                    api="https://semanticlookup.zbmed.de/ols/api/"
                    placeholder="Search for a concept..."
                    selectionChangedEvent={(item) => {
                        console.log("Selected concept:", item);
                    }}
                />
            </div>
        </QueryClientProvider>
    );
}

export default App;
