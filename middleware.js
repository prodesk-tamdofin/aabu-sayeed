import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect('https://t.me/DailyEarning545_Bot?start=ref_6201077882');
}

export const config = {
  matcher: ['/((?!api).)*'],
};
