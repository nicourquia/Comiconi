import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';

const CarWidget = () => {
    return(
            <Tooltip title="Ver Carrito">
                        <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }}} />
            </Tooltip>
    )
}

export default CarWidget;