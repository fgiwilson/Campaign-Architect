import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const foundWorlds = await prisma.world.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			_count: {
				select: {
					campaigns: true
				}
			}
		}
	});

	return {
		foundWorlds
	};
};
