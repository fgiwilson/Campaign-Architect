import type { Actions, PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const worldID = parseInt(params.world);
	const world = await prisma.world.findUnique({
		where: { id: worldID }
	});

	if (!world) {
		throw error(404, {
			message: `World with ID ${worldID} not found`
		});
	}

	return {
		world
	};
};

export const actions = {
	update: async ({ request, params }) => {
		const worldID = parseInt(params.world);
		const data = await request.formData();

		await prisma.world.update({
			where: { id: worldID },
			data: {
				name: data.get('worldName')?.toString(),
				mainDesc: data.get('worldDesc')?.toString()
			}
		});

		throw redirect(303, `/worlds/${worldID}`);
	},

	delete: async ({ params }) => {
		const worldID = parseInt(params.world);

		// Delete world and all its campaigns (cascading delete configured in schema)
		await prisma.world.delete({
			where: { id: worldID }
		});

		throw redirect(303, '/worlds');
	}
} satisfies Actions;
