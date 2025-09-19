export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Opções de cálculo:`)
        console.log(`Soma, Subtração, Divisão, Multiplicação, Potenciação, Radiciação ou Calcular as raízes de uma função do segundo grau (Func)\n`)
    }

    public comoUsar = () => {
        console.log(`Para efetuar os cálculos digite os números e a opção de cálculo desejados. Separe-os por espaço. Exemplo: "4 7 Somar"`)
        console.log(`Se for uma função: "2 -4 8 Func" > "1x² -4x + 8"`)
        console.log(`O resultado será a soma dos números: 11`)
        console.log(`Para finalizar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nCalculadora\n')
    }

}
