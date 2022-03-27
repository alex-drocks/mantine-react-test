import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import ClientForm from '../components/ClientForm/ClientForm';

export default function HomePage() {
  return (
    <Container fluid>
      <ColorSchemeToggle />
      <ClientForm />
    </Container>
  );
}
