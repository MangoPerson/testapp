import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { method, query } = req;

	switch (method) {
	case 'GET':
		res.status(200).json({ value: 'GET Success!' });
		break;
	case 'POST':
		res.status(200).json({ value: 'POST Success!'});
		break;
	case 'PATCH':

		break;
	case 'DELETE':

		break;
	default:
		res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
		res.status(405).end(`Method ${method} not allowed.`);
	}
}
