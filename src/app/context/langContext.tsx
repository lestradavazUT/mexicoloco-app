'use client';

import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useEffect,
    useState
} from 'react';

interface LangContextType {
    langValue: string;
    setLangValue: Dispatch<SetStateAction<string>>;
}

export const LangContext = createContext<LangContextType>({
    langValue: 'es',
    setLangValue: () => {}
});

interface Props {
    children: ReactNode;
    initial?: string;
}

export const LangContextProvider: FC<Props> = ({
    children,
    initial = 'es'
}) => {
    const [langValue, setLangValue] = useState(initial);

    useEffect(() => {
        setLangValue(localStorage.getItem('lang'));
    }, []);

    return (
        <LangContext.Provider value={{ langValue, setLangValue }}>
            {children}
        </LangContext.Provider>
    );
};
