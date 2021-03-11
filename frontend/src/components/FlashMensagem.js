import React, { useContext, useEffect } from 'react';

import FilmesContext from '../context/FilmesContext';

function FlashMensagem() {

    const filmesContext = useContext(FilmesContext);

    const { mensagemFlash, tipoFlash, fecharFlash } = filmesContext;

    let corBg;

    if (tipoFlash === 'erro') {
        corBg = 'bg-red-500';
    } else if (tipoFlash === 'sucesso') {
        corBg = 'bg-green-500';
    }

    useEffect(() => {
        setTimeout(() => {
            fecharFlash();
        }, 2500);
    });

    return (
        <div className={corBg}>
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="hidden md:inline">
                                {mensagemFlash}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashMensagem;
