interface ICreateReport {
    type_report: number | string
    person_involved: IPersonInvolved[] | null | undefined
    place: IPlace[] | null | undefined
    date_start: string | null
	date_end: string | null
	description: string | null | undefined
	answer1: string | null | undefined
	answer2: string | null | undefined
	answer3: string | null | undefined
	answer4: string | null | undefined
	answer5: string | null | undefined
	answer6: string | null | undefined
	answer7: string | null | undefined
	evidence: File[] | null | undefined,
}