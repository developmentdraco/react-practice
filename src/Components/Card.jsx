import React from 'react';

const Card = ( props ) => {

    const titleClasses  = "text-xs font-weight-bold text-"+props.color+" text-uppercase mb-1";

    return(

        <div className="col-md-4 mb-4">
            <div className={ `card border-left-${props.color} shadow h-100 py-2` }>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={ titleClasses } >{ props.titulo }</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{ props.cantidad }</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-film fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Card;