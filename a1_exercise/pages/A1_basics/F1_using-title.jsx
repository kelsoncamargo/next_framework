import Title from '../../components/A1_Title'

export default function usingTitle(){
    return(
        <div>
            <Title
                main='Página de Cadastro'
                secundary='Incluir, Alterar e excluir coisas!'
            />
            <Title
                main='Página de Login'
                secundary='Informe Email e Senha!'
                pequeno
            />
        </div>
    )
}