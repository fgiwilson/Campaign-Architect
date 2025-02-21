import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const worldID = parseInt(params.world);

	const world = await prisma.world.findUnique({
		where: { id: worldID },
		include: {
			campaigns: {
				orderBy: {
					createdAt: 'desc'
				}
			}
		}
	});

	if (!world) {
		throw error(404, {
			message: `World with ID ${worldID} not found`
		});
	}

	return {
		theWorld: world,
		theCampaigns: world.campaigns
	};
};
