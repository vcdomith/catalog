export interface IProduto {
    nome: string
    codigo: string
    descricao?: string
    tabela_1: string
    tabela_3: string
    fornecedor_id: number
    categoria_id: number
    firma_id: number
    image_url: string
    ativo: boolean
}