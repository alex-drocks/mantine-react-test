import { TextInput, Checkbox, Button, Group, Box, Center, Container } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function ClientForm() {
  const form = useForm({
    initialValues: {
      friendlyName: '',
      businessName: '',
    },

    validate: {
      friendlyName: (value) =>
        value.length > 1 ? null : 'Le nom doit avoir au moins 2 caractères',
      businessName: (value) =>
        value.length > 1 ? null : 'Le nom doit avoir au moins 2 caractères',
    },
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <Container size="xs">
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
        <TextInput
          required
          label="Nom commun"
          placeholder="Le nom qu'on utilise quand on parle entre nous"
          {...form.getInputProps('friendlyName')}
        />
        <TextInput
          required
          label="Nom d'entreprise"
          placeholder="Le nom officiel de l'entreprise"
          {...form.getInputProps('businessName')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}
