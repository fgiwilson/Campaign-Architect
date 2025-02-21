import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const stats = await prisma.$transaction(async (tx) => {
		const worldCount = await tx.world.count();
		const campaignCount = await tx.campaign.count();
		const recentWorlds = await tx.world.findMany({
			take: 5,
			orderBy: { createdAt: 'desc' },
			include: {
				_count: {
					select: { campaigns: true }
				}
			}
		});

		return {
			worldCount,
			campaignCount,
			recentWorlds
		};
	});

	return {
		...stats
	};
};