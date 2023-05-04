class Cadastro {
    constructor() {
        this.id = 1
        this.arrayCadastro = []
    }

    Adicionar() {
        let cadastro = this.lerDados()
        if (this.Validar(cadastro) == true) {
            this.Salvar(cadastro)
        }

        this.Listar()
        this.Cancelar()
    }

    lerDados() {
        let cadastro = {}

        cadastro.id = this.id
        cadastro.nomeCadastro = document.getElementById('cdtnome').value
        cadastro.cpfCadastro = document.getElementById('cdtcpf').value
        cadastro.endereçoCadastro = document.getElementById('cdtendereço').value

        return cadastro
    }

    Validar(cadastro) {
        let msg = ''

        if (cadastro.nomeCadastro == '') {
            msg += 'Insira o nome \n'
        }

        if (cadastro.cpfCadastro == '') {
            msg += 'Insira o CPF \n'
        }

        if (cadastro.endereçoCadastro == '') {
            msg += 'Insira o endereço \n'
        }

        if (msg != '') {
            alert(msg)
            return false
        }

        return true
    }

    Salvar(cadastro) {
        this.arrayCadastro.push(cadastro)
        this.id++
    }

    Listar() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for (let i = 0; i < this.arrayCadastro.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_cpf = tr.insertCell()
            let td_endereço = tr.insertCell()
            let td_del = tr.insertCell()

            td_id.innerText = this.arrayCadastro[i].id
            td_nome.innerText = this.arrayCadastro[i].nomeCadastro
            td_cpf.innerText = this.arrayCadastro[i].cpfCadastro
            td_endereço.innerText = this.arrayCadastro[i].endereçoCadastro
            let image = document.createElement('img')
            image.src = 'delete.png'
            image.setAttribute(
                'onclick',
                'cadastro.Deletar(' + this.arrayCadastro[i].id + ')'
            )
            td_del.appendChild(image)
        }
    }

    Cancelar() {
        document.getElementById('cdtnome').value = ''
        document.getElementById('cdtcpf').value = ''
        document.getElementById('cdtendereço').value = ''
    }

    Deletar(id) {
        let tbody = document.getElementById('tbody')
        for (let i = 0; i < this.arrayCadastro.length; i++) {
            if (this.arrayCadastro[i].id == id) {
                this.arrayCadastro.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert('O item foi apagado')
    }
}

var cadastro = new Cadastro()