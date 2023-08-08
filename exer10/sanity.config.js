import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './sanity/schemas/schema-types';

export default config = defineConfig({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    title: "exer10",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes
    },
})