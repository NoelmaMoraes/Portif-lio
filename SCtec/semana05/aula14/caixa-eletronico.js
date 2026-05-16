// 1. Cadastro dos 3 usuários iniciais
        const usuarios = [
            { login: "ana", senha: "123", saldo: 1000, historico: [] },
            { login: "joao", senha: "456", saldo: 500, historico: [] },
            { login: "noelma", senha: "789", saldo: 2000, historico: [] }
        ];

        // 2. Variável para guardar quem está logado
        let usuarioLogado = null;

        // 3. Processo de Login
        let tentativaLogin = prompt("Digite seu login:");
        let tentativaSenha = prompt("Digite sua senha:");

        // Procura na lista se existe alguém com esse login e senha
        usuarioLogado = usuarios.find(u => u.login === tentativaLogin && u.senha === tentativaSenha);

        if (usuarioLogado) {
            alert("Bem-vindo(a), " + usuarioLogado.login + "!");
            executarMenu();
        } else {
            alert("Login ou senha incorretos.");
        }

        // 4. Menu de Operações
        function executarMenu() {
            let continuar = true;

            while (continuar) {
                let opcao = prompt(
                    "Escolha uma operação:\n" +
                    "1. Ver Saldo\n" +
                    "2. Sacar\n" +
                    "3. Depositar\n" +
                    "4. Ver Histórico\n" +
                    "5. Sair"
                );

                switch (opcao) {
                    case "1":
                        alert("Seu saldo atual é: R$ " + usuarioLogado.saldo);
                        break;

                    case "2":
                        let valorSaque = parseFloat(prompt("Quanto deseja sacar?"));
                        if (valorSaque <= usuarioLogado.saldo) {
                            usuarioLogado.saldo -= valorSaque;
                            usuarioLogado.histori
                            ("Saque de R$ " + valorSaque);
                            alert("Saque realizado!");
                        } else {
                            alert("Saldo insuficiente.");
                        }
                        break;

                    case "3":
                        let valorDeposito = parseFloat(prompt("Quanto deseja depositar?"));
                        usuarioLogado.saldo += valorDeposito;
                        usuarioLogado.historico.push("Depósito de R$ " + valorDeposito);
                        alert("Depósito realizado!");
                        break;

                    case "4":
                        if (usuarioLogado.historico.length === 0) {
                            alert("Nenhuma operação realizada ainda.");
                        } else {
                            alert("Histórico:\n" + usuarioLogado.historico.join("\n"));
                        }
                        break;

                    case "5":
                        continuar = false;
                        alert("Sessão encerrada.");
                        break;

                    default:
                        alert("Opção inválida.");
                }
            }
        }