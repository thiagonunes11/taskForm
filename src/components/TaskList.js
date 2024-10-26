import React from 'react';
import Tarefa from './Task';


function ListaTarefas({ tarefas, marcarConcluida, removerTarefa }) {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    marcarConcluida={marcarConcluida}
                    removerTarefa={removerTarefa}
                />
            ))}
        </ul>
    );
}


export default ListaTarefas;