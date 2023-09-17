import React from "react";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            dashboard: undefined;
            addmeal: undefined;
            feedback: {
                is_meal_diet: 'yes' | 'no',
            }
            detail: {
                id: string;
            }
         
        }
    }
}