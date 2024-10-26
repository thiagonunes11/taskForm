import React, { useState } from 'react';
import FormularioTarefa from './components/TaskForm';
import ListaTarefas from './components/TaskList';
import { Box, Typography } from '@mui/material';

function App() {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (titulo) => {
        const novaTarefa = {
            id: Date.now(),
            titulo: titulo,
            concluida: false
        };
        setTarefas([...tarefas, novaTarefa]);
    };

    const marcarConcluida = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    };

    const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
    const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh" // Centraliza verticalmente
            textAlign="center" // Alinha o texto ao centro
            p={3} // Padding para dar um espaçamento nas laterais
        >
            <Typography variant="h4" gutterBottom>
                Lista de Tarefas
            </Typography>
            <FormularioTarefa adicionarTarefa={adicionarTarefa} />
            <ListaTarefas 
                tarefas={tarefas} 
                marcarConcluida={marcarConcluida} 
                removerTarefa={removerTarefa} 
            />
            <Typography variant="body1" mt={2}>
                Tarefas Pendentes: {tarefasPendentes}
            </Typography>
            <Typography variant="body1" mb={2}>
                Tarefas Concluídas: {tarefasConcluidas}
            </Typography>
        </Box>
    );
}

export default App;
