// Basic auth cho brain map trên Vercel (edge middleware, chạy được ở hobby plan).
// Set env BRAIN_MAP_PASSWORD trong Vercel project → login: user `huy` / pass = env.
// File này chỉ Vercel dùng — không liên quan vault.
export const config = { matcher: '/(.*)' };

export default function middleware(req) {
  const pass = process.env.BRAIN_MAP_PASSWORD;
  if (!pass) return;
  const expected = 'Basic ' + btoa('huy:' + pass);
  if ((req.headers.get('authorization') || '') !== expected) {
    return new Response('🔒 brain', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="second-brain"' },
    });
  }
}
