// app/api/create-trip/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Your API logic here
  // Example: get data from request.json()
  // const data = await request.json();
  // console.log(data);
  return NextResponse.json({ message: 'Trip created successfully' });
}

// You can also define other methods like GET, PUT, DELETE
// export async function GET(request: Request) {
//   return NextResponse.json({ message: 'This is the create-trip GET endpoint' });
// }
