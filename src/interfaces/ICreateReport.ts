interface ICreateReport {
    date_start: Date
	date_end: Date
	description: string
	answer1: string
	answer2: string
	answer3: string
	answer4: string
	answer5: string
	answer6: string
	answer7: string
	answer8: string
	evidence: []
	type_report: number
	person_involved: IPersonInvolved[]
	place: IPlace[]
	status : Buffer
}