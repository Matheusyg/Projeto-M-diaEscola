        var nomeAluno = prompt("Digite o nome do aluno");

        var nota1 = parseFloat(prompt("Digite a Nota da Prova 1: "));

        var nota2 = parseFloat(prompt("Digite a Nota da Prova 2: "));

        var nota2 = nota2 * 2;

        var nota3 = parseFloat(prompt("Digite a Nota da Prova 3: "));

        var nota3 = nota3 * 2;

        var trabalho = parseFloat(prompt("Digite a Nota do trabalho: "));

        var media1 = nota1 + nota2 + nota3 + trabalho

        alert("A nota total do aluno " + nomeAluno + " é " + media1);

        var media2 = (nota1 + nota2 + nota3 + trabalho) / 6;  

        if(media2 >= 6){
            alert("Aluno Aprovado, sua nota é " + media2);

        } else{
            alert("Aluno Reprovado, sua nota é " + media2);
        }