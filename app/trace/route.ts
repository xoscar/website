import { NextRequest, NextResponse } from 'next/server';
import explain from '@oscar-js/explain-my-trace/dist/explain';

type ResponseData = {
  message: string;
  explanation?: Awaited<ReturnType<typeof explain>>;
  error?: unknown;
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file = data.get('file') as File;
    const format = data.get('format') as string;

    const raw = await file.text();

    const explanation = await explain({
      raw,
      type: format as 'jaeger' | 'tempo',
    });

    return NextResponse.json({ message: 'Hello from Next.js!', explanation });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: 'Failed to explain trace', error: error.message }, { status: 500 });
  }
};
