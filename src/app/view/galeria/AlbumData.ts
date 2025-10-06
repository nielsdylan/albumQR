import { currency } from '@/helpers'

type TableType<T> = {
  header: string[]
  body: T[]
}

type CompanyInfoType = {
  id: number
  titulo: string
  descripcion: string
  estado: number
  usuario_id: number
  accion: string
}

export const columns = [
    {
        data: 'id',
        render: (data: number) => {
        return `${data}`
        },
        className: 'text-start',
    },
    {
        data: 'titulo',
        render: (data: string) => {
        return `${data}`
        },
    },
    {
        data: 'descripcion',
        render: (data: string) => {
        return `${data}`
        },
    },
    {
        data: 'estado',
        render: (data: string) => {
        const badgeClass = data ? 'success' : 'danger'
        const badgetext = data ? 'Activo' : 'Inactivo'
        return `<span class="badge badge-label badge-soft-${badgeClass}">${badgetext}</span>`
        },
    },
    {
        data: 'id',
        render: (data: string) => {
        return `<button class="btn btn-warning btn-sm" key="${data}">Editar</button>`
        },
    },
]

export const tableData: TableType<CompanyInfoType> = {
  header: ['id', 'Titulo', 'Descripción', 'Estado', 'Accion'],
  body: [
    // {
    //     "id": 1,
    //     "titulo": "GRADUCIÓN",
    //     "descripcion": "El momento mas importe de mi linea de estudiante.",
    //     "estado": 1,
    //     "usuario_id": 1
    // },
    // {
    //     "id": 2,
    //     "titulo": "VACACIONES EN LIMA",
    //     "descripcion": "Disfrutando de mis vacaciones en Lima.",
    //     "estado": 1,
    //     "usuario_id": 1
    // },
    // {
    //     "id": 3,
    //     "titulo": "PASANTIA",
    //     "descripcion": "Disfrutando de mi pasantia.",
    //     "estado": 1,
    //     "usuario_id": 1
    // }
  ],
}
