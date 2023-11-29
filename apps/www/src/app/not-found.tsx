export const metadata = {
  description: 'not found description',
  title: '404 - Pedaki',
};

export default function NotFound() {
  // This not found only happen when we could not find a file,
  // else it'll be handled in ./[locale]/[...notFound]/page.tsx
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}
