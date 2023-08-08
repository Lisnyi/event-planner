import * as yup from 'yup';

export const updateEventSchema = yup.object().shape({
	title: yup.string()
		.required(`field is required`),
	description: yup.string()
		.required(`field is required`),
	date: yup.date()
		.required(`field is required`),
	time: yup.date()
		.required(`field is required`),
	location: yup.string()
		.required(`field is required`),
	category: yup.string()
		.required(`field is required`),
	picture: yup.string(),
	priority: yup.string()
		.required(`field is required`)
});