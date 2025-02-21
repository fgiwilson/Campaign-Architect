import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';

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
	create: async ({ request, params }) => {
		const worldID = parseInt(params.world);
		const data = await request.formData();

		// Create campaign and update world's campaign count in a transaction
		const result = await prisma.$transaction(async (tx) => {
			const campaign = await tx.campaign.create({
				data: {
					name: data.get('campaignName')?.toString() || '',
					campaignDesc: data.get('campaignDesc')?.toString(),
					worldId: worldID
				}
			});

			await tx.world.update({
				where: { id: worldID },
				data: {
					numCampaigns: {
						increment: 1
					}
				}
			});

			return campaign;
		});

		throw redirect(303, `/worlds/${worldID}/campaign/${result.id}`);
	}
} satisfies Actions;
