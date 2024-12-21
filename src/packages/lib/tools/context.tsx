import React from "react";

export function createSafeContext<T>() {
    const Context = React.createContext<T | undefined>(undefined);
    function useContext() {
        const context = React.useContext(Context);
        if (context === undefined) {
            throw new Error('useContext must be inside a Provider with a value');
        }
        return context;
    }
    return [Context.Provider, useContext] as const;
}