import {Box, Typography} from "@mui/material";
import {TagList} from "../components";
import {AuthMainLayout} from "../layouts";

const tags = [
  'tag-1',
  'tag-2',
  'tag-3',
  'tag-4',
  'tag-5',
  'tag-6',
  'tag-7',
  'tag-8',
  'tag-9',
];

export const TagsSelectPage = () => {
  return (
    <AuthMainLayout>
      <Box>
        <Typography variant="h1" textAlign='center' my={3}>
          ¿Qué buscas?
        </Typography>
        <Typography variant="body1" mb={4}>
          Selecciona según la historia que quieres contar
        </Typography>
      </Box>

      <hr />

      <TagList tags={ tags } />
    </AuthMainLayout>
  );
}
