import React from 'react';
import { ListGroup } from 'react-bootstrap';  // Importe ListGroup do React Bootstrap
import { routes } from '../../routes/routes';

export const DataList = () => {
    return (
        <div>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Acesso rápido..." />
            
            <ListGroup>
                {routes.map((route, index) => (
                    <ListGroup.Item 
                        key={index} 
                        action 
                        onClick={() => window.location.href = route.path}  // Redireciona para a rota
                    >
                        {route.path}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};
