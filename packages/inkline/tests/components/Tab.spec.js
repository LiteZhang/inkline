import { shallowMount } from '@vue/test-utils';
import Tab from '@inkline/inkline/src/components/Tab';

describe('Components', () => {
    describe('Tab', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallowMount(Tab, {
                propsData: {
                    id: 'tab'
                },
                methods: {
                    mounted: Tab.mounted,
                    destroyed: Tab.destroyed,
                },
                provide: {
                    tabs: {
                        active: null
                    }
                }
            });
        });

        it('should be named correctly', () => {
            expect(Tab.name).toEqual('ITab');
        });

        it('should render correctly', () => {
            expect(wrapper.html()).toMatchSnapshot();
        });

        describe('props', () => {
            describe('title', () => {
                it('should be defined', () => {
                    expect(wrapper.vm.title).toBeDefined();
                    expect(wrapper.vm.title).toEqual('');
                });
            });

            describe('id', () => {
                it('should be defined', () => {
                    expect(wrapper.vm.id).toBeDefined();
                    expect(wrapper.vm.id).toEqual('tab');
                });

                it('should be randomly generated if not defined', () => {
                    wrapper = shallowMount(Tab, {
                        provide: {
                            tabs: {
                                active: null
                            }
                        }
                    });

                    expect(wrapper.vm.id).toMatch(/^tab-\w+/);
                });
            });
        });

        describe('computed', () => {
            describe('active()', () => {
                it('should be defined', () => {
                    expect(wrapper.vm.active).toBeDefined();
                });

                it('should return false if current item is not active', () => {
                    expect(wrapper.vm.active).toEqual(false);
                });

                it('should return true if current item is active', () => {
                    wrapper = shallowMount(Tab, {
                        propsData: {
                            id: 'item1'
                        },
                        provide: {
                            tabs: {
                                active: 'item1'
                            }
                        }
                    });

                    expect(wrapper.vm.active).toEqual(true);
                });
            });
        });

        describe('mounted()', () => {
            it('should dispatch "init" event to ITabs', () => {
                const spy = jest.spyOn(wrapper.vm, 'dispatch');

                wrapper.vm.mounted();

                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith('ITabs', 'init');
            });
        });

        describe('destroyed()', () => {
            it('should dispatch "init" event to ITabs', () => {
                const spy = jest.spyOn(wrapper.vm, 'dispatch');

                wrapper.vm.destroyed();

                expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith('ITabs', 'init');
            });
        });
    });
});
