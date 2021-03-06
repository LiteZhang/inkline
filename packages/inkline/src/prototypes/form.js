import { FormBuilder } from "@inkline/inkline/src/factories/FormBuilder";

/**
 * Construct a basic form schema with default values
 */
export function form(name, schema) {
    if (typeof name !== 'string') {
        schema = name;
        name = '';
    }

    return FormBuilder.build(name, schema, { group: true, root: true });
}
