<template lang="md" src="./methods.md" />
<script>
import View from '@components/docs/View';
import { head } from "@helpers/head";
import { IInput, IButton, IForm, IFormGroup } from "@inkline/inkline/src/components";

export default {
    extends: View,
    name: 'FormValidationMethodsView',
    layout: 'documentation',
    head: head('docs-forms-validation-methods'),
    components: {
        IInput,
        IButton,
        IForm,
        IFormGroup
    },
    data () {
        return {
            listForm: this.$inkline.form({
                items: [
                    { value: 'Existing Field' },
                    { value: 'Existing Field' }
                ]
            }),

            objectForm: this.$inkline.form({
                fullName: {}
            }),
        };
    },
    methods: {
        addField() {
            this.listForm.items.add({
                value: 'Added Field'
            });
        },
        removeField() {
            this.listForm.items.remove(0, 1);
        },
        replaceField() {
            this.listForm.items.remove(0, 1, {
                value: 'Spliced Field'
            });
        },
        setEmail() {
            this.objectForm.set('email', {
                validators: [
                    { rule: 'email' }
                ]
            }, { instance: this });
        },
        setAddress() {
            this.objectForm.set('address', {
                value: '32 Inkline St.'
            }, { instance: this });
        }
    },
    filters: {
        prettify (value) {
            return JSON.stringify(value, null, 2);
        }
    }
};
</script>
