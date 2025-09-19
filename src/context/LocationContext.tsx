import React, { createContext, useContext, useMemo, useState } from 'react';

type LocationContextValue = {
  selectedState: string;
  setSelectedState: (value: string) => void;
};

const LocationContext = createContext<LocationContextValue | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedState, setSelectedState] = useState<string>('Maharashtra');

  const value = useMemo(
    () => ({ selectedState, setSelectedState }),
    [selectedState]
  );

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useLocation must be used within a LocationProvider');
  return ctx;
}
