import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { cortarString } from '../../util/Helper';

function ItemListaFilme({ dadosFilme }) {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">

                    <div className="text-sm font-medium underline text-gray-900">
                        <Link to={{ pathname: '/editar-filme', state: dadosFilme }}>
                            {dadosFilme.titulo}
                        </Link>
                    </div>

                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dadosFilme.anoLancamento}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                    data-tip={dadosFilme.sinopse}
                    data-for='sinopse-completa'
                    data-place='top'
                    data-delay-show='700'
                >{cortarString(dadosFilme.sinopse, 60) + '...'}</div>
                <ReactTooltip id="sinopse-completa" />

            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link to={{ pathname: '/busca-filme-direcao', state: dadosFilme.direcao }}>
                    <span className="underline">{dadosFilme.direcao}</span>
                </Link>

            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dadosFilme.avaliacao}
            </td>
        </tr>
    )
}

export default ItemListaFilme;
