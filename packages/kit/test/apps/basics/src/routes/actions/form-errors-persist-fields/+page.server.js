import { invalid } from '@sveltejs/kit';

/**
 * @type {import('./$types').Actions}
 */
export const actions = {
	default: async ({ fields }) => {
		fields.delete('password');
		throw invalid(400, {
			values: Object.fromEntries(fields),
			errors: {
				message: 'invalid credentials'
			}
		});
	}
};