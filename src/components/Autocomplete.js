import React from "react";
import { AutocompleteWidget } from "@ts4nfdi/terminology-service-suite";

const Autocomplete = () => {
    return (
        <AutocompleteWidget
            api="https://semanticlookup.zbmed.de/ols/api/"
            placeholder="Search for a concept..."
            selectionChangedEvent={(item) => {
                console.log("Selected concept:", item);
            }}
        />
    );
};

export default Autocomplete;
