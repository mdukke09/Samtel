/* eslint-disable react/prop-types */
function ItemsRequisitos({ valor, cont }) {
    return (
        <div className={cont === 1 ? 'table_row' : 'table_row_invs'}>
            <p className='p_row'>{valor}</p>
        </div>
    );
}

export default ItemsRequisitos;
