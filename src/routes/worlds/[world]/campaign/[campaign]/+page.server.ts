import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const campaignID = parseInt(params.campaign);
	const worldID = parseInt(params.world);

	const campaign = await prisma.campaign.findUnique({
		where: { id: campaignID },
		include: {
			world: true
		}
	});

	if (!campaign) {
		throw error(404, {
			message: `Campaign with ID ${campaignID} not found`
		});
	}

	if (campaign.worldId !== worldID) {
		throw error(400, {
			message: `Campaign ${campaignID} does not belong to world ${worldID}`
		});
	}

	return {
		theCampaign: campaign,
		theWorld: campaign.world
	};
};
