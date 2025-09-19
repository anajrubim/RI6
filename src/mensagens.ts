export default class Mensagens {

    public listarOpcoes = () => {
        console.log(`Opções de cálculo:`)
        console.log(`Soma, Subtração, Divisão, Multiplicação, Potenciação, Radiciação ou Calcular as raízes de uma função do segundo grau (Func)\n`)
    }

    public comoUsar = () => {
        console.log(`Para efetuar os cálculos digite os números e a opção de cálculo desejados. Separe-os por espaço. Exemplo: "4 7 Somar"`)
        console.log(`Se uma função: "1 -5 6 Func" > "1x² -5x + 6"`)
        console.log(`O resultado será a soma dos números: 4`)
        console.log(`Para finalizar digite "Sair"\n`)
    }

    public boasVindas = () => {
        console.log('\nCalculadora\n')
    }

}
