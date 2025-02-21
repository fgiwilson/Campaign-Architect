import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.world);

	const foundWorld = await prisma.world.findUnique({
		where: { id },
		include: {
			campaigns: true,
			_count: {
				select: {
					campaigns: true
				}
			}
		}
	});

	if (!foundWorld) {
		throw error(404, {
			message: `World with ID ${id} not found`
		});
	}

	return {
		theWorld: foundWorld,
		theCampaigns: foundWorld.campaigns
	};
};
