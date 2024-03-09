function searchUserByValue(arrayUsers, valueSearch) {
	return new Promise((resolve, reject) => {
		// Percorre o array de usuários
		for (const user of arrayUsers) {
			// Verifica se alguma propriedade do usuário contém o valor de pesquisa
			if (user.nome === valueSearch || user.idade === valueSearch || user.email === valueSearch) {
				resolve(user); // Encontrou um usuário com o valor desejado
				return;
			}
		}
		// Se não encontrou nenhum usuário, rejeita a promise
		reject(new Error('No users found.'));
	});
}

/** database users. */
const users = [
	{ nome: 'Keliton', idade: 30, email: 'keliton@example.com' },
	{ nome: 'Joao', idade: 25, email: 'joao@example.com' },
	{ nome: 'Everton', idade: 28, email: 'everton@example.com' }
];

/** search by value */
const valueSearch = 'herc@example.com';

searchUserByValue(users, valueSearch)
	.then((userReturn) => {
		console.log('User found:', userReturn);
	})
	.catch((erro) => {
		console.error('Error:', erro.message);
	});