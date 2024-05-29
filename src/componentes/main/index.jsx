import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main() {
    const [professores, setProfessores] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [turmas, setTurmas] = useState([]);

    const [nomeProfessor, setNomeProfessor] = useState('');
    const [nomeDisciplina, setNomeDisciplina] = useState('');
    const [nomeTurma, setNomeTurma] = useState('');

    const [selectedProfessor, setSelectedProfessor] = useState('');
    const [selectedDisciplina, setSelectedDisciplina] = useState('');
    const [selectedTurma, setSelectedTurma] = useState('');

    const [numeroDias, setNumeroDias] = useState('');

    const [horarios, setHorarios] = useState([]);

    const cadastrarProfessor = () => {
        setProfessores([...professores, nomeProfessor]);
        setNomeProfessor('');
    };

    const cadastrarDisciplina = () => {
        setDisciplinas([...disciplinas, nomeDisciplina]);
        setNomeDisciplina('');
    };

    const cadastrarTurma = () => {
        setTurmas([...turmas, nomeTurma]);
        setNomeTurma('');
    };

    const cadastrarHorario = () => {
        const novoHorario = {
            professor: selectedProfessor,
            disciplina: selectedDisciplina,
            turma: selectedTurma,
            dias: numeroDias,
        };

        setHorarios([...horarios, novoHorario]);

        // Limpa os campos após o cadastro
        setSelectedProfessor('');
        setSelectedDisciplina('');
        setSelectedTurma('');
        setNumeroDias('');
    };

    return (
        <div className="tudo">
            <div className="Cadastro">
                <div className="CadastroTemplate">
                    <h1 className="h1Cadastro">Cadastro de Professores</h1>
                    <input
                        placeholder="Digite o nome do professor"
                        type="text"
                        value={nomeProfessor}
                        onChange={(e) => setNomeProfessor(e.target.value)}
                    />
                    <button onClick={cadastrarProfessor}>Cadastrar</button>
                </div>

                <div className="CadastroTemplate">
                    <h1 className="h1Cadastro">Cadastro de Disciplinas</h1>
                    <input
                        placeholder="Digite o nome da disciplina"
                        type="text"
                        value={nomeDisciplina}
                        onChange={(e) => setNomeDisciplina(e.target.value)}
                    />
                    <button onClick={cadastrarDisciplina}>Cadastrar</button>
                </div>

                <div className="CadastroTemplate">
                    <h1 className="h1Cadastro">Cadastro de Turmas</h1>
                    <input
                        placeholder="Digite o nome da turma"
                        type="text"
                        value={nomeTurma}
                        onChange={(e) => setNomeTurma(e.target.value)}
                    />
                    <button onClick={cadastrarTurma}>Cadastrar</button>
                </div>
            </div>

            <div className="CadastroHorario">
                <h1 className="h1Cadastro">Cadastro de Horários</h1>
                <div className="divEscolhas">
                    <select
                        value={selectedProfessor}
                        onChange={(e) => setSelectedProfessor(e.target.value)}
                    >
                        <option value="">Selecione um professor</option>
                        {professores.map((professor, index) => (
                            <option key={index} value={professor}>
                                {professor}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedDisciplina}
                        onChange={(e) => setSelectedDisciplina(e.target.value)}
                    >
                        <option value="">Selecione uma disciplina</option>
                        {disciplinas.map((disciplina, index) => (
                            <option key={index} value={disciplina}>
                                {disciplina}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedTurma}
                        onChange={(e) => setSelectedTurma(e.target.value)}
                    >
                        <option value="">Selecione uma turma</option>
                        {turmas.map((turma, index) => (
                            <option key={index} value={turma}>
                                {turma}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Número de dias"
                        value={numeroDias}
                        onChange={(e) => setNumeroDias(e.target.value)}
                    />
                    <button onClick={cadastrarHorario}>Cadastrar</button>
                </div>
            </div>

     
            <div className="Resultado Resposta">
                <h2>Horários Cadastrados:</h2>
                {horarios.map((horario, index) => (
                    <div className="HorarioCadastrado" key={index}>
                        <p>Professor: {horario.professor}</p>
                        <p>Disciplina: {horario.disciplina}</p>
                        <p>Turma: {horario.turma}</p>
                        <p>Número de dias: {horario.dias}</p>
                        <hr />
                    </div>
                ))}
            </div>

        </div>
    );
}
