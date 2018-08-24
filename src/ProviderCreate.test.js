import React from 'react';
import "./setupTests"
import { mount } from "enzyme";
import ProviderCreate from './ProviderCreate';
import Dictionary from "./Dictionary";


describe("ProviderCreate", () => {
    let props;
    let mountedProviderCreate;
    const providerCreate = () => {
        if (!mountedProviderCreate) {
            mountedProviderCreate = mount(
                <ProviderCreate {...props} />
            );
        }
        return mountedProviderCreate;
    };

    beforeEach(() => {
        props = {
            specialtyOptions: []
        };
        mountedProviderCreate = undefined;
    });


    it("always renders a div", () => {
        const divs = providerCreate().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });


    describe("renders a `Dictionary`", () => {
        it("to display validation failures", () => {
            expect(providerCreate().find(Dictionary).length).toBe(1);
        });

        it("which receives 1 prop", () => {
            const dictionary = providerCreate().find(Dictionary);
            expect(Object.keys(dictionary.props()).length).toBe(1);
        });
    });


    it("on each keystroke, doesn't validate email if it was valid on the last validation", () => {
        const providerC = providerCreate();
        expect(providerC.state().formErrors).toEqual({});
        const mockCheckValidity = jest.fn();

        providerCreate().instance().saveBackToState({target: {name: 'email', value: 'foo@bar.com', checkValidity: mockCheckValidity}});

        expect(mockCheckValidity).not.toBeCalled();
    });

    it("on each keystroke, does validate email if it was invalid on the last validation", () => {
        const providerC = providerCreate();
        providerCreate().setState({formErrors: {email: "must contain @"}});
        expect(providerC.state().formErrors).toEqual({email: "must contain @"});
        const mockCheckValidity = jest.fn();
        mockCheckValidity.mockReturnValue(true);

        providerCreate().instance().saveBackToState({target: {name: 'email', value: 'foo@bar.com', checkValidity: mockCheckValidity}});

        expect(mockCheckValidity).toBeCalled();
    });


    describe("requires an array of specialtyOptions to be passed", () => {
        beforeEach(() => {
            props.specialtyOptions = ["Eschatology", "Hermanutics", "Astrogeology"];
        });

        it("should make each specialtyOption available as a datalist option", () => {
            const providerC = providerCreate();
            let options = providerC.find('option');
            expect(options.length).toEqual(3);
        })
    });
});
