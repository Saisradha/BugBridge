import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { url, title, description, severity } = req.body;
    
    const report = await prisma.report.create({
      data: {
        url,
        title,
        description,
        severity,
        status: 'OPEN',
        reporter: { connect: { id: 'user-id-placeholder' } } // Replace with actual user ID from session
      }
    });

    res.status(200).json(report);
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}