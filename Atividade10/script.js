/*  Criar o Objeto: Aluno1(propriedades: RA, Nome).
    Atribua valores para as propriedades. 
    **Utilizar 3 formas diferentes.
    Disponibilizar como Atividade10 no GITHUB. Seunome/PWEB/Atividade10 */

    //Forma 1
    function Aluno1(RA, Nome){
        this.RA = RA;
        this.Nome = Nome;
    }

    var Aluno = new Aluno1('0030482013044', 'Douglas Andrade');

    //Forma 2
    var Aluno1 = {};
    Aluno1.RA = '0030482013044';
    Aluno1.Nome = 'Douglas Andrade';

    //Forma 3
    var Aluno1 = newObject();
    Aluno1.RA = '0030482013044';
    Aluno1.Nome = 'Douglas Andrade';