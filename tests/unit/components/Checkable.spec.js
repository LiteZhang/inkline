import { mount } from '@vue/test-utils';
import Checkable from 'inkline/components/Checkable';

describe('Components', () => {
    describe('Checkable', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(Checkable);
        });

        it('should render correctly', () => {
            expect(true);
        });
    });
});