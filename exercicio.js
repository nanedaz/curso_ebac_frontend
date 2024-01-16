
const alunos = [
    {nome: "Ana", nota: 8.5},
    {nome: "Luis", nota: 3.1},
    {nome: "Carlos", nota: 5.7},
    {nome: "Fernanda", nota: 9.3},
    {nome: "Isabela", nota: 6.5},
    {nome: "Júlia", nota: 2.1},
    {nome: "Luana", nota: 6.1},
    {nome: "Miguel", nota: 4},
    {nome: "Isadora", nota: 6.7},
    {nome: "Rafael", nota: 4.8}
];


function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));
