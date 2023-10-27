export interface IHomeResponse {
    data: IHome
    message: string
    operation: string
}

export interface ICurrentWeekConsulting {
    idConsulting: string
    consultingNumber: string
    dni: string
    client: string
    consultingDateAndHour: string
    status: number
    reason: string
}

export interface ICurrentWeekSession {
    idConsulting: string
    idSession: string
    consultingNumber: string
    sessionNumber: string
    dni: string
    client: string
    sessionDateAndHour: string
    status: string
}

export interface IHome {
    countConsulting: {
        canceled: number
        attended: number
        rejected: number
        total: number
    }
    currentWeekConsulting: [ICurrentWeekConsulting]
    currentWeekSession: [ICurrentWeekSession]
}