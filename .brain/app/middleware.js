// Basic auth cho brain map trên Vercel (edge middleware — chạy được ở hobby plan).
// Set env BRAIN_MAP_PASSWORD trong Vercel project → user: huy / pass: <env>.
// Không set env = không khoá (đừng quên set).
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
