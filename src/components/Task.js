import React from 'react';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Tarefa({ tarefa, marcarConcluida, removerTarefa }) {
    return (
        <Box display="flex" alignItems="center" mb={2}>
            <Checkbox                
                checked={tarefa.concluida}
                onChange={() => marcarConcluida(tarefa.id)}
                sx={{ padding: 0, marginRight: 1 }}
            />
            <span 
                style={{ 
                    textDecoration: tarefa.concluida ? 'line-through' : 'none',
                    fontSize: '16px',
                    color: tarefa.concluida ? 'gray' : 'black',
                    marginRight: '16px'
                }}
            >
                {tarefa.titulo}
            </span>
            <Button 
                variant='contained'
                color='secondary'
                onClick={() => removerTarefa(tarefa.id)}
                sx={{ minWidth: '100px' }}
            > 
                Remover
            </Button>
        </Box>
    );
}

export default Tarefa;
