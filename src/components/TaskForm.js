import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function FormularioTarefa({ adicionarTarefa }) {
    const [titulo, setTitulo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim()) {
            adicionarTarefa(titulo);
            setTitulo('');
            console.log('dfgh')
        }
    };


    return (
        <Box textAlign={'center'}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" alignItems="center">
                    <TextField 
                        id="outlined-basic" 
                        label="Nova Tarefa" 
                        variant="outlined"
                        sx={{marginRight: 3}}
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <Button variant='contained' type="submit">Adicionar</Button>
                </Box>
            </form>
        </Box>

    );
}


export default FormularioTarefa;