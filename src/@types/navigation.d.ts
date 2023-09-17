import React from "react";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            dashboard: undefined;
            addmeal: undefined;
            feedback: {
                meal_id: string;
            }
         
        }
    }
}