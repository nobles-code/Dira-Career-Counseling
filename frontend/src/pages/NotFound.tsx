// src/pages/NotFound.tsx
import ButtonLink from '../components/ui/ButtonLink';
import Container from '../components/ui/Container';
import { usePageMeta } from '../lib/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <Container as="section" className="py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-4">The page you are looking for does not exist or has moved.</p>
      <ButtonLink to="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}