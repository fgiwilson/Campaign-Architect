import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		
		const newWorld = await prisma.world.create({
			data: {
				name: data.get('worldName')?.toString() || '',
				mainDesc: data.get('worldDesc')?.toString() || '',
				numCampaigns: 0,
				settings: {}
			}
		});

		throw redirect(303, `/worlds/${newWorld.id}`);
	}
} satisfies Actions;
