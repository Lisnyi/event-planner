import * as yup from 'yup';

export const createEventSchema = yup.object().shape({
	title: yup.string()
		.required(`Title обов'язковий`),
	description: yup.string()
		.required(`description обов'язковий`),
	date: yup.date(),
	category: yup.string()
		.required(`description обов'язковий`),
	priority: yup.string()
		.required(`description обов'язковий`)
});